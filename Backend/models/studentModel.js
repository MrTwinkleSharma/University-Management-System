const sql = require("../config/db");

// constructor
const Student = function(student) {
  this.id = student.id;
  this.email = student.email;
  this.name = student.name;
  this.attendance = student.attendance;
  this.marks = student.marks;  
};


Student.create = (newStudent, result) => {
    sql.query("INSERT INTO students SET ?", newStudent, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created student: ", { id: res.insertId, ...newStudent });
      result(null, { id: res.insertId, ...newStudent });
    });
  };

  Student.getAll = result => {
    sql.query("SELECT * FROM students", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("students: ", res);
      result(null, res);
    });
  };

  Student.findById = (studentId, result) => {
  sql.query(`SELECT * FROM students WHERE id = ${studentId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found student: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found student with the id
    result({ kind: "not_found" }, null);
  });
};

Student.updateById = (id, student, result) => {
  if(student.marks && student.attendance){
    sql.query(
      "UPDATE students SET marks = ?, attendance = ?  WHERE id = ?",
      [student.marks, student.attendance, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found student with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated student: ", { id: id, ...student });
        result(null, { id: id, ...student });
      }
    );
  }
};

module.exports = Student;