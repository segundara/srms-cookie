const express = require("express")
const db = require("../../db")
const multer = require("multer")
const bcrypt = require("bcrypt")
const { authorize, onlyForStudent, onlyForAdmin } = require("../middlewares/authorize")
const sgMail = require("@sendgrid/mail")

const { BlobServiceClient, StorageSharedKeyCredential, BlobLeaseClient } = require("@azure/storage-blob")
var MulterAzureStorage = require('multer-azure-storage')

const credentials = new StorageSharedKeyCredential("srmscdn", process.env.STORAGE_KEY)
// const blobClient = new BlobServiceClient("https://srmscdn.blob.core.windows.net/", credentials)

const studentRouter = express.Router();

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

studentRouter.get("/", authorize, async (req, res, next) => {
    try {
        const sort = req.query.sort
        const order = req.query.order
        const offset = req.query.offset || 0
        const limit = req.query.limit

        delete req.query.sort
        delete req.query.order
        delete req.query.offset
        delete req.query.limit

        let query = 'SELECT * FROM "students" ' //create query

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

studentRouter.get("/me", authorize, onlyForStudent, async (req, res, next) => {
    try {
        const getMe = await db.query('SELECT * FROM "students" WHERE email= $1',
            [req.user.email])
        res.send(getMe.rows[0])
    } catch (error) {
        next("While reading users list a problem occurred!")
    }
})

studentRouter.post("/register", authorize, onlyForAdmin, async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newStudent = await db.query(`INSERT INTO "students" (firstname, lastname, email, dateofbirth, nationality, departmentid) 
    Values ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
            [req.body.firstname, req.body.lastname, req.body.email, req.body.dateofbirth, req.body.nationality, req.body.departmentid])

        const newUser = await db.query(`INSERT INTO "users" (email, password, title) 
            Values ($1, $2, $3)
            RETURNING *`,
            [req.body.email, hashedPassword, req.body.title])

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: newUser.rows[0].email,
            from: 'srms.school.records@gmail.com',
            subject: 'School Account Created',
            text: `Hello ${newStudent.rows[0].firstname} ${newStudent.rows[0].lastname}, 
                \nWe are happy to inform you that a page has been created for you on the school portal.
                \nYou can access your account page with the following credentials:
                \nEmail => ${newUser.rows[0].email}
                \nPassword => ${req.body.password}.
                \n\nKind regards
                \nSchool Management.`
        };
        await sgMail.send(msg);

        res.status(201).send(newStudent.rows[0])
    } catch (error) {
        next(error)
    }
})

// // EXTRA) Using multer middleware to upload image
// const getFileName = (file) => file.originalname

// const multerOptions = multer({
//     storage: new MulterAzureStorage({
//         azureStorageConnectionString: process.env.STORAGE_CS,
//         containerName: 'images',
//         containerSecurity: 'container',
//         fileName: getFileName
//     })
// })

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
});

const multerOptions = multer({ storage: storage });

studentRouter.post("/upload/me", authorize, multerOptions.single("file"), async (req, res, next) => {
    try {
        let params = []
        // let query = `UPDATE "students" SET image = '${req.file.url}'`
        let query = `UPDATE "students" SET image = '${req.file.path}'`

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

studentRouter.put("/me", authorize, async (req, res, next) => {
    try {
        let params = []
        let query = 'UPDATE "students" SET '
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

        const updateUserInfo = await db.query('UPDATE "users" SET email = $1 WHERE email = $2',
            [req.body.email, req.user.email])

        res.send(result.rows[0]) //else, return the updated version
    }
    catch (error) {
        next(error)
    }
})

studentRouter.delete("/me", authorize, async (req, res, next) => {
    try {
        const response = await db.query(`DELETE FROM "students" WHERE email = $1`, [req.user.email])

        if (response.rowCount === 0)
            return res.status(404).send("Not Found")

        res.send("Record deleted!")

    } catch (error) {
        next(error)
    }
})


module.exports = studentRouter