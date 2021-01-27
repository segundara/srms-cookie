
/**
 * @swagger
 * components:
 *  schemas:
 *   Admin:
 *    type: object
 *    properties:
 *     firstname:
 *      type: string
 *      description: firstname of the admin
 *     lastname:
 *      type: string
 *      description: lastname of the admin
 *     email:
 *      type: string
 *      description: email of the admin
 *     password:
 *      type: string
 *      description: password of the admin
 *     title:
 *      type: string
 *      example: 'admin'
 */

/**
 * @swagger
 * /admin/register:
 *  post:
 *   tags:
 *   - "admin"
 *   summary: add new admin (must be signed-in as an ADMIN to do this)
 *   description: register a new admin into the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Admin'
 *   responses:
 *    200:
 *     description: New admin succesfully added
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /admin/upload/me:
 *  post:
 *   tags:
 *   - "admin"
 *   summary: image upload for the current user (in this case 'admin')
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
 * /admin/me:
 *  put:
 *   tags:
 *   - "admin"
 *   summary: update admin info
 *   description: admin can update his/her info in the system
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
 * /admin:
 *  get:
 *   tags:
 *   - "admin"
 *   summary: get all admins
 *   description: get all admins
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
 * /admin/me:
 *  get:
 *   tags:
 *   - "admin"
 *   summary: get the current user (admin in this case)
 *   description: get the current user who has just login as a student
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    403:
 *     description: only for admin
 *    500:
 *     description: error
 */