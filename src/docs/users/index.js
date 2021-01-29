
/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     email:
 *      type: string
 *      description: email of the user
 *     password:
 *      type: string
 *      description: password of the user
 */

/**
 * @swagger
 * /users/login:
 *  post:
 *   tags:
 *   - "users"
 *   summary: login into the system (Select from the sample login details included)
 *   description: Signin required before user can access the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *      examples:
 *       as_student:
 *        value:
 *         email: jani@email.com
 *         password: jani
 *       as_tutor:
 *        value:
 *         email: perti@email.com
 *         password: pertipuhaka
 *       as_admin:
 *        value:
 *         email: segun@email.com
 *         password: segunoke
 *   responses:
 *    200:
 *     description: login succesfully
 *    500:
 *     description: failure to login
 */

/**
 * @swagger
 * /users/logout:
 *  post:
 *   tags:
 *   - "users"
 *   summary: logout from the system
 *   description: Ends the user session
 *   responses:
 *    200:
 *     description: logout succesfully
 *    500:
 *     description: failure to logout
 */
