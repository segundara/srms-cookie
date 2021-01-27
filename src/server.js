const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
const studentRouter = require("./routes/students");
const departmentRouter = require("./routes/departments");
const courseRouter = require("./routes/courses");
const lecturerRouter = require("./routes/lecturers");
const registerRouter = require("./routes/course_register");
const examRouter = require("./routes/exams");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/users");
const listEndpoints = require("express-list-endpoints");
const cookieParser = require("cookie-parser");

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const {
  notFoundHandler,
  forbiddenHandler,
  badRequestHandler,
  genericErrorHandler,
} = require("./routes/middlewares/errorHandlers");

const server = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'School Record System API',
      version: '1.0.0',
      description: 'Documentation for school record system API',
      contact: {
        name: 'segundara',
        url: 'https://segundara.github.io/',
        email: 'segundara@gmail.com'
      },
      servers: ["http://localhost:4234", "https://srms-be.herokuapp.com"]
    }
  },
  apis: [
    "./src/docs/users/index.js",
    "./src/docs/students/index.js",
    "./src/docs/lecturers/index.js",
    "./src/docs/admin/index.js",
    "./src/docs/departments/index.js",
    "./src/docs/courses/index.js",
    "./src/docs/course_register/index.js",
    "./src/docs/exams/index.js"
  ]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
console.log(swaggerDocs)
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const whitelist = ["https://srms-fe.herokuapp.com", "https://srms-be.herokuapp.com/", "http://localhost:4234"]
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET, POST, PUT, DELETE, HEAD, OPTIONS",
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(cookieParser());

server.use("/student", studentRouter);
server.use("/departments", departmentRouter);
server.use("/courses", courseRouter);
server.use("/tutor", lecturerRouter);
server.use("/register", registerRouter);
server.use("/exams", examRouter);
server.use("/admin", adminRouter);
server.use("/users", userRouter);

// ERROR HANDLERS MIDDLEWARES

server.use(badRequestHandler);
server.use(forbiddenHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

console.log(listEndpoints(server));
server.listen(process.env.PORT || 3456, () =>
  console.log("Running on ", process.env.PORT || 3456)
);
