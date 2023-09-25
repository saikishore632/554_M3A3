// Student Name: SAI KISHORE REDDY KONATHAM
// Student ID: 1226951585
// Date: 09/24/2023

// const express = require("express");
// const app = express();
// const bodyparser = require("body-parser");
// app.use(bodyparser.json());
// // const welComeMiddleware = (req, res, next) => {
// //     console.log('Welcome to my website');
// //     next();
// // }

// const checkAdmin = (req, res, next) => {
//   if (req.query.admin === "true") {
//     next();
//   } else {
//     res.status(400).send("should be admin");
//   }
// };
// // app.get('/', (req, res) => {
// // res.send('hello world');
// // });

// const makeUpperCase = (req, res, next) => {
//   const student = req.body;
//   if (
//     req.body.fname === undefined ||
//     req.body.mname === undefined ||
//     req.body.lname === undefined
//   ) {
//     return res.send("Please enter a valid name");
//   }
//   req.body.fname = student.fname.toUpperCase();
//   req.body.mname = student.mname.toUpperCase();
//   req.body.lname = student.lname.toUpperCase();
//   next();
// };
// app.use(makeUpperCase);
// const students = []; // array of students objects acting as storage

// const getSpecificStudent = (req, res) => {
//   const id = req.params.id;

//   const currentStudent = students[id];
//   if (currentStudent === undefined) {
//     res.send(`Student with the  ${id} is not found`);
//   }
//   res.send(
//     `Student with the  ${id} is ${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`
//   );
// };
// const getStudents = (req, res) => {
//   res.send(students);
// };
// const addStudents = (req, res) => {
//   const student = req.body;
//   students.push(student);
//   res.send(
//     `Student with the name ${student.fname} ${student.mname} , ${student.lname} added to the database`
//   );
// };

// const updateStudent = (req, res) => {
//   const id = req.params.id;
//   const student = req.body;
//   students[id] = student;
//   res.send(`Student with the id  ${id} has been updated`);
// };

// const deleteStudent = (req, res) => {
//   const id = req.params.id;
//   const student = students[id];
//   students.splice(id, 1);
//   res.send(`Student with the id  ${id} has been deleted`);
// };
// app.get("/students/:id", checkAdmin, getSpecificStudent); // get all student function
// app.get("/students", getStudents);
// app.post("/students", addStudents);

// app.put("/students/:id", updateStudent);
// app.delete("/students/:id", checkAdmin, deleteStudent);

// // app.use(welComeMiddleware);
// // app.use(checkAdmin);

// app.use("/", function (req, res, next) {
//   console.log("Request URL:", +req.url);
//   res.send("Hello");
// });
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());
// const welComeMiddleware = (req, res, next) => {
//     console.log('Welcome to my website');
//     next();
// }

const checkAdmin = (req, res, next) => {
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(400).send("should be admin");
  }
};

// app.get('/', (req, res) => {
// res.send('hello world');
// });

const makeUpperCase = (req, res, next) => {
  const student = req.body;
  if (
    req.body.fname === undefined ||
    req.body.mname === undefined ||
    req.body.lname === undefined
  ) {
    return res.send("Please enter a valid name");
  }
  req.body.fname = student.fname.toUpperCase();
  req.body.mname = student.mname.toUpperCase();
  req.body.lname = student.lname.toUpperCase();
  next();
};

app.use(makeUpperCase);
const students = []; // array of students objects acting as storage

const getSpecificStudent = (req, res) => {
  const id = req.params.id;

  const currentStudent = students[id];
  if (currentStudent === undefined) {
    res.send(`Student with the  ${id} is not found`);
  }
  res.send(
    `Student with the  ${id} is ${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`
  );
};
const getStudents = (req, res) => {
  res.send(students);
};
const addStudents = (req, res) => {
  const student = req.body;
  students.push(student);
  res.send(
    `Student with the name ${student.fname} ${student.mname} , ${student.lname} added to the database`
  );
};

const updateStudent = (req, res) => {
  const id = req.params.id;
  const student = req.body;
  students[id] = student;
  res.send(`Student with the id  ${id} has been updated`);
};

const deleteStudent = (req, res) => {
  const id = req.params.id;
  const student = students[id];
  students.splice(id, 1);
  res.send(`Student with the id  ${id} has been deleted`);
};
app.get("/students/:id", checkAdmin, getSpecificStudent); // get all student function
app.get("/students", getStudents);
app.post("/students", addStudents);

app.put("/students/:id", updateStudent);
app.delete("/students/:id", checkAdmin, deleteStudent);

// app.use(welComeMiddleware);
// app.use(checkAdmin);

app.use("/", function (req, res, next) {
  console.log("Request URL:", +req.url);
  res.send("Hello");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
