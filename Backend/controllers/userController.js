const User = require("../models/userModel.js");
const connection = require("../config/db.js");

const createUser = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};


const updateUser = (req, res) => {
  // Validate Request
  if (!req.body) {
   res.status(400).send({
     message: "Content can not be empty!"
   });
 }

 User.updateById(
   req.params.userId,
   new User(req.body),
   (err, data) => {
     if (err) {
       if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not found User with id ${req.params.userId}.`
         });
       } else {
         res.status(500).send({
           message: "Error updating User with id " + req.params.userId
         });
       }
     } else res.send(data);
   }
 ); 
};

const deleteUser = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
}

module.exports = {
    createUser,
    updateUser,
    deleteUser  
}