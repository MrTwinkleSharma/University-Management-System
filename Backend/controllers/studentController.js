const Student = require("../models/studentModel.js");
const connection = require("../config/db.js");

const createStudent = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Student
  const student = new Student({
    id: req.body.id,
    email: req.body.email,
    name: req.body.name,
    marks: req.body.marks,
    attendance: req.body.attendance,
  });

  // Save Student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    else {
        console.log(err);
        res.send(data);
    }
  });
};

const getStudent = (req, res) => {
    Student.findById(req.params.studentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Student with id ${req.params.studentId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Student with id " + req.params.studentId
            });
          }
        } else res.send(data);
      });
};

const getStudents = (req, res) => {
    Student.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving students."
          });
        else res.send(data);
      });
};

const updateStudent = (req, res) => {
    console.log("here");
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Student.updateById(
    req.params.studentId,
    new Student(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Student with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Student with id " + req.params.studentId
          });
        }
      } else res.send(data);
    }
  ); 
};

module.exports = {
    createStudent,
    getStudent,
    getStudents,
    updateStudent
}