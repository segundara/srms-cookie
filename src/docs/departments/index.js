
/**
 * @swagger
 * components:
 *  schemas:
 *   Department:
 *    type: object
 *    properties:
 *     name:
 *      type: string
 *      description: name of the department to be added
 */

/**
* @swagger
* /departments:
*  post:
*   tags:
*   - "departments"
*   summary: add new department into the system (ADMIN right only)
*   description: add new department into the system
*   requestBody:
*    content:
*     application/json:
*      schema:
*       $ref: '#/components/schemas/Department'
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
* /departments:
*  get:
*   tags:
*   - "departments"
*   summary: get all departments
*   description: get all departments
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
* /departments/{id}:
*  get:
*   tags:
*   - "departments"
*   summary: get a specific department
*   description: get info about a specific department
*   parameters:
*    - in: path
*      name: id
*      required: true
*   responses:
*    200:
*     description: success
*    401:
*     description: unauthorized
*    500:
*     description: error
*/