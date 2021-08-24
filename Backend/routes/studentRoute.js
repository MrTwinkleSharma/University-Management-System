const express = require('express');
const router = express.Router();

const {getStudent} = require("../controllers/studentController");

router.get("/:studentId", getStudent);  

module.exports = router;
