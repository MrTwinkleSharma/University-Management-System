const express = require('express');
const router = express.Router();

const {
    createUser,
    getUser,
    updateUser,
    deleteUser    
} = require("../controllers/userController.js");


router.post("/", createUser);  

router.get("/:id", getUser);  

router.delete("/:id", deleteUser);  

module.exports = router;
