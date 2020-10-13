const express = require("express")
const db = require("../../db")
const multer = require("multer")
const bcrypt = require("bcrypt")
const { authorize, onlyForAdmin } = require("../middlewares/authorize")

const { BlobServiceClient, StorageSharedKeyCredential, BlobLeaseClient } = require("@azure/storage-blob")
var MulterAzureStorage = require('multer-azure-storage')

const credentials = new StorageSharedKeyCredential("srmscdn", process.env.STORAGE_KEY)
// const blobClient = new BlobServiceClient("https://srmscdn.blob.core.windows.net/", credentials)

const adminRouter = express.Router();


adminRouter.get("/", authorize, onlyForAdmin, async (req, res, next) => {
    try {
        const sort = req.query.sort
        const order = req.query.order
        const offset = req.query.offset || 0
        const limit = req.query.limit

        delete req.query.sort
        delete req.query.order
        delete req.query.offset
        delete req.query.limit

        let query = 'SELECT * FROM "admin" ' //create query

        const params = []
        for (queryParam in req.query) { //for each value in query string, I'll filter
            params.push(req.query[queryParam])

            if (params.length === 1)
                query += `WHERE ${queryParam} = $${params.length} `
            else
                query += ` AND ${queryParam} = $${params.length} `
        }

        if (sort !== undefined)
            query += `ORDER BY ${sort} ${order}`  //adding the sorting 

        params.push(limit)
        query += ` LIMIT $${params.length} `
        params.push(offset)
        query += ` OFFSET $${params.length}`
        console.log(query)

        const response = await db.query(query, params)

        res.send({ count: response.rows.length, data: response.rows })

    } catch (error) {
        next(error)
    }
})

adminRouter.get("/me", authorize, async (req, res, next) => {
    try {
        const getMe = await db.query('SELECT * FROM "admin" WHERE email= $1',
            [req.user.email])
        res.send(getMe.rows[0])
    } catch (error) {
        next("While reading users list a problem occurred!")
    }
})

adminRouter.post("/register", authorize, onlyForAdmin, async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newAdmin = await db.query(`INSERT INTO "admin" (firstname, lastname, email) 
    Values ($1, $2, $3)
    RETURNING *`,
            [req.body.firstname, req.body.lastname, req.body.email])

        const newUser = await db.query(`INSERT INTO "users" (email, password, title) 
        Values ($1, $2, $3)
        RETURNING *`,
            [req.body.email, hashedPassword, req.body.title])

        // console.log(newAdmin)
        res.send(newAdmin.rows[0])
    } catch (error) {
        next(error)
    }
})

// EXTRA) Using multer middleware to upload image
const getFileName = (file) => file.originalname

const multerOptions = multer({
    storage: new MulterAzureStorage({
        azureStorageConnectionString: process.env.STORAGE_CS,
        containerName: 'images',
        containerSecurity: 'container',
        fileName: getFileName
    })
})

adminRouter.post("/upload/me", authorize, multerOptions.single("file"), async (req, res, next) => {
    try {
        let params = []
        let query = `UPDATE "admin" SET image = '${req.file.url}'`

        params.push(req.user.email)
        query += " WHERE email = $" + (params.length) + " RETURNING *"
        console.log(query)

        const result = await db.query(query, params)

        if (result.rowCount === 0)
            return res.status(404).send("Not Found")

        res.send(result.rows[0])
    }
    catch (error) {
        next(error)
    }
})

adminRouter.put("/me", authorize, async (req, res, next) => {
    try {
        let params = []
        let query = 'UPDATE "admin" SET '
        for (bodyParamName in req.body) {
            query += // for each element in the body I'll add something like parameterName = $Position
                (params.length > 0 ? ", " : '') + //I'll add a coma before the parameterName for every parameter but the first
                bodyParamName + " = $" + (params.length + 1) // += Category = $1 

            params.push(req.body[bodyParamName]) //save the current body parameter into the params array
        }

        params.push(req.user.email) //push the id into the array
        query += " WHERE email = $" + (params.length) + " RETURNING *" //adding filtering for id + returning
        console.log(query)

        const result = await db.query(query, params) //querying the DB for updating the row


        if (result.rowCount === 0) //if no element match the specified id => 404
            return res.status(404).send("Not Found")

        res.send(result.rows[0]) //else, return the updated version
    }
    catch (error) {
        next(error)
    }
})

adminRouter.delete("/me", authorize, async (req, res, next) => {
    try {
        const response = await db.query(`DELETE FROM "admin" WHERE email = $1`, [req.user.email])

        if (response.rowCount === 0)
            return res.status(404).send("Not Found")

        res.send("Record deleted!")

    } catch (error) {
        next(error)
    }
})


module.exports = adminRouter