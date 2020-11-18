
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">SRMS-API(Backend)</h3>

  <p align="center">
    SCHOOL_RECORD_MANAGEMENT_SYSTEM
    <br />
    <a href="https://github.com/segundara/srms-cookie"><strong>Explore the repo »</strong></a>
    <br />
    <br />
    <a href="https://srms-fe.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/segundara/srms-cookie/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

This API serves as backend for [SRMS-Frontend](https://github.com/segundara/srms-fe) which is targeted at deploying a web application that is programmed in order to take care of exam/result and administrative records.
The system will be available to the tutors with their login information, to record their students’ result online and also be accessible to students in other to check and print/download their result wherever they are using their personal computers, tablets or smart phones. 
The system will also be available to a super-user tagged “ADMIN”, who will be in control of registering new student, tutor and also adding new course to the database.



### Built With

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [JWT](https://jwt.io/)
* [@azure/storage-blob](https://azure.microsoft.com/en-us/services/storage/blobs/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* DEPENDENCIES
```sh
    "@azure/storage-blob": "^12.2.1",
    "@sendgrid/mail": "^7.2.6",
    "bcrypt": "^5.0.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-list-endpoints": "^4.0.1",
    "express-validator": "^6.6.0",
    "fs-extra": "^9.0.1",
    "jsonwebtoken": "^8.5.1",
    "multer": "^1.4.2",
    "multer-azure-storage": "^0.2.0",
    "pdfmake": "^0.1.68",
    "pg": "^8.3.0",
    "roboto-font": "^0.1.0",
    "validator": "^13.1.1"
```

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/segundara/srms-cookie.git
```
2. Install NPM packages
```sh
npm install
```


<!-- CONTACT -->
## Contact

Olusegun Emmanuel Okedara - [@Linkedin](https://www.linkedin.com/in/olusegunemmanuelokedara/)

Project Link: [https://github.com/segundara/srms-cookie](https://github.com/segundara/srms-cookie)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/segundara/srms-cookie.svg?style=flat-square
[issues-url]: https://github.com/segundara/srms-cookie/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/olusegunemmanuelokedara/
