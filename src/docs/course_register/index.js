
/**
 * @swagger
 * definitions:
 *  CourseRegister:
 *   type: object
 *   properties:
 *    courseid:
 *     type: string
 *     description: ID of the course
 *     example: '371a094a-f7a0-43a6-aa8f-86d0af414e82'
 *    studentid:
 *     type: string
 *     description: ID of the student
 *     example: 'cea590b2-b114-44c2-b789-711afa823da6'
 *    reg_date:
 *     type: string
 *     description: date of registration for the course
 *     example: 'YYYY-MM-DD'
 *    examdate:
 *     type: string
 *     description: date of exam
 *     example: 'YYYY-MM-DD'
 */

/**
 * @swagger
 * /register:
 *  post:
 *   tags:
 *   - "CourseRegister"
 *   summary: enroll in a course
 *   description: enroll in a course
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/CourseRegister'
 *   responses:
 *    200:
 *     description: course registration successful
 *    401:
 *     description: unauthorized
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /register/course_list/{studentid}:
 *  get:
 *   tags:
 *   - "CourseRegister"
 *   summary: for viewing registered course list for a student
 *   description: for viewing registered course list for a student
 *   parameters:
 *    - in: path
 *      name: studentid
 *      description: ID of the of the student
 *      required: true
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    403:
 *     description: forbidden
 *    500:
 *     description: failure due to error
 */

/**
 * @swagger
 * /register/student_list/{courseid}:
 *  get:
 *   tags:
 *   - "CourseRegister"
 *   summary: for viewing students list in a particular course
 *   description: for viewing students list in a particular course
 *   parameters:
 *    - in: path
 *      name: courseid
 *      description: ID of the course
 *      required: true
 *   responses:
 *    200:
 *     description: success
 *    401:
 *     description: unauthorized
 *    500:
 *     description: error
 */