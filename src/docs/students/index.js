
/**
 * @swagger
 * definitions:
 *  Student:
 *   type: object
 *   properties:
 *    firstname:
 *     type: string
 *     description: firstname of the student
 *    lastname:
 *     type: string
 *     description: lastname of the student
 *    email:
 *     type: string
 *     description: email of the student
 *    password:
 *     type: string
 *     description: password of the student
 *    dateofbirth:
 *     type: string
 *     description: dateofbirth of the student
 *     example: "YYYY-MM-DD"
 *    nationality:
 *     type: string
 *     description: nationality of the student
 *    departmentid:
 *     type: string
 *     description: ID of the department that student will belong
 *     example: '975b2da8-390e-4341-957c-df3c553978a5'
 *    title:
 *     type: string
 *     example: 'student'
 */

/**
 * @swagger
 * /student/register:
 *  post:
 *   tags:
 *   - "student"
 *   summary: add new student (must be signed-in as an ADMIN to do this)
 *   description: register a new student into the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Student'
 *   responses:
 *    201:
 *     description: New student succesfully added
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /student/upload/me:
 *  post:
 *   tags:
 *   - "student"
 *   summary: image upload for the current user (in this case 'student')
 *   description: upload an image as profile picture
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       type: object
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *   responses:
 *    200:
 *     description: file succesfully uploaded
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /student/me:
 *  put:
 *   tags:
 *   - "student"
 *   summary: update student info
 *   description: student can update his/her info in the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        firstname:
 *         type: string
 *        lastname:
 *         type: string
 *        email:
 *         type: string
 *        dateofbirth:
 *         type: string
 *         example: YYYY-MM-DD
 *        nationality:
 *         type: string
 *   responses:
 *    200:
 *     description: New student succesfully added
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /student:
 *  get:
 *   tags:
 *   - "student"
 *   summary: get all students
 *   description: get all students
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    500:
 *     description: error
 */

/**
 * @swagger
 * /student/me:
 *  get:
 *   tags:
 *   - "student"
 *   summary: get the current user (student in this case)
 *   description: get the current user who has just login as a student
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    403:
 *     description: forbidden
 *    500:
 *     description: error
 */