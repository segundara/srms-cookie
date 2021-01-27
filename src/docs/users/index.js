
/**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'jani@email.com'
 *    password:
 *     type: string
 *     description: password of the user
 *     example: 'jani'
 */

/**
 * @swagger
 * /users/login:
 *  post:
 *   tags:
 *   - "users"
 *   summary: login into the system required
 *   description: Signin required before user can access the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
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
