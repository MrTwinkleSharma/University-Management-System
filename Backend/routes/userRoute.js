const express = require('express');
const router = express.Router();

const {
    createUser,
    updateUser,
    deleteUser    
} = require("../controllers/userController.js");


router.post("/", createUser);  

router.put("/:userId", updateUser);  

router.delete("/:userId", deleteUser);  

module.exports = router;
