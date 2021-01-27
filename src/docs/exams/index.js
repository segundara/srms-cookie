
/**
 * @swagger
 * /exams/{studentid}:
 *  get:
 *   tags:
 *   - "exams"
 *   summary: endpoint to view exam grades and other exam info
 *   description: endpoint to view exam grades and other exam info
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
 * /exams/{studentid}/pdf:
 *  get:
 *   tags:
 *   - "exams"
 *   summary: endpoint to download transcript of records
 *   description: endpoint to download transcript of records
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
 * /exams/student_list/{courseid}:
 *  get:
 *   tags:
 *   - "exams"
 *   summary: endpoint to get students list in a particular exam
 *   description: endpoint to get students list in a particular exam
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

/**
 * @swagger
 * /exams/{studentid}/{id}:
 *  put:
 *   tags:
 *   - "exams"
 *   summary: endpoint to upload exam grades
 *   description: endpoint to upload exam grades
 *   parameters:
 *    - in: path
 *      name: studentid
 *      description: ID of the of the student
 *      required: true
 *    - in: path
 *      name: id
 *      description: ID of the of the exam
 *      required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        grade:
 *         type: string
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
