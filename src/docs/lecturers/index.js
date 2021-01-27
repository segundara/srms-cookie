
/**
 * @swagger
 * definitions:
 *  Tutor:
 *   type: object
 *   properties:
 *    firstname:
 *     type: string
 *     description: firstname of the tutor
 *    lastname:
 *     type: string
 *     description: lastname of the tutor
 *    email:
 *     type: string
 *     description: email of the tutor
 *    password:
 *     type: string
 *     description: password of the tutor
 *    departmentid:
 *     type: string
 *     description: ID of the department that tutor will belong
 *     example: '975b2da8-390e-4341-957c-df3c553978a5'
 *    title:
 *     type: string
 *     example: 'tutor'
 *  Email:
 *   type: object
 *   properties:
 *    recipient:
 *     type: string
 *     description: email of the receiver
 *    subject:
 *     type: string
 *     description: subject of the email
 *    content:
 *     type: string
 *     description: content of the email
 */

/**
 * @swagger
 * /tutor/register:
 *  post:
 *   tags:
 *   - "tutor"
 *   summary: add new tutor (must be signed-in as an ADMIN to do this)
 *   description: register a new tutor into the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Tutor'
 *   responses:
 *    200:
 *     description: New tutor succesfully added
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /tutor/upload/me:
 *  post:
 *   tags:
 *   - "tutor"
 *   summary: image upload for the current user (in this case 'tutor')
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
 * /tutor/email/ToStudent:
 *  post:
 *   tags:
 *   - "tutor"
 *   summary: send email to a particular student
 *   description: send email to a particular student
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Email'
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /tutor/me:
 *  put:
 *   tags:
 *   - "tutor"
 *   summary: update tutor info
 *   description: tutor can update his/her info in the system
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
 *   responses:
 *    200:
 *     description: successfully updated
 *    401:
 *     description: unauthorized
 *    403:
 *     description: forbidden
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /tutor:
 *  get:
 *   tags:
 *   - "tutor"
 *   summary: get all tutors
 *   description: get all tutors
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
 * /tutor/me:
 *  get:
 *   tags:
 *   - "tutor"
 *   summary: get the current user (tutor in this case)
 *   description: get the current user who has just login as a student
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    403:
 *     description: only for tutor
 *    500:
 *     description: error
*/