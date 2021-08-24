const express = require('express');
const router = express.Router();

const {
    createStudent,
    getStudent,
    getStudents,
    updateStudent    
} = require("../controllers/studentController.js");


router.post("/", createStudent);  

router.get("/", getStudents);  

router.get("/:studentId", getStudent);  

router.put("/:studentId", updateStudent);  

module.exports = router;
