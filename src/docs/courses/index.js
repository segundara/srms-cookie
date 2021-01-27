
/**
 * @swagger
 * definitions:
 *  Course:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the course
 *    description:
 *     type: string
 *     description: description of the course
 *    semester:
 *     type: string
 *     description: semester that the course will be thaught
 *    lecturerid:
 *     type: string
 *     description: ID of the lecturer that will be in-charge
 *     example: 'dabe3a0d-ae43-4bfa-9a00-ed1991ef42db'
 *    examdate:
 *     type: string
 *     example: 'YYYY-MM-DD'
 */

/**
 * @swagger
 * /courses:
 *  post:
 *   tags:
 *   - "course"
 *   summary: add new course (must be signed-in as an ADMIN to do this)
 *   description: register a new course into the system
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Course'
 *   responses:
 *    200:
 *     description: New course succesfully added
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /courses/{id}:
 *  put:
 *   tags:
 *   - "course"
 *   summary: update course info
 *   description: course info can be updated in the system
 *   parameters:
 *    - in: path
 *      name: id
 *      description: ID of the of the course
 *      required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *        description:
 *         type: string
 *        semester:
 *         type: string
 *        examdate:
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
 * /courses:
 *  get:
 *   tags:
 *   - "course"
 *   summary: get all courses
 *   description: get all courses
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
 * /courses/{lecturerid}:
 *  get:
 *   tags:
 *   - "course"
 *   summary: get the details of a course being managed by a particular lecturer
 *   description: get the details of a course being managed by a particular lecturer
 *   parameters:
 *    - in: path
 *      name: lecturerid
 *      description: ID of the lecturer in-charge of the course
 *      required: true
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    500:
 *     description: error
 */