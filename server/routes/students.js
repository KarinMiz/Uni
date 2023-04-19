const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  addStudent,
  updateStudent,
  getStudent,
} = require("../api/students");

router.get("/", async (req, res) => {
  try {
    const students = await getAllStudents();
    res.send(students.rows);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addStudent", async (req, res) => {
  try {
    const values = [
      req.body.id,
      req.body.name,
      req.body.yearbook
    ];

    const newStudent = await addStudent(values);
    res.send(newStudent);

    console.log("New Student has been created successfully");
  } catch (error) {
    res.send(error);
  }
});

router.put("/updateStudent/:id", async (req, res) => {
  try {
    const values = [
      req.body.name,
      req.body.yearbook,
      req.params.id,
    ];
    const newStudent = await updateStudent(values);
    res.send(newStudent);

    console.log(` ${req.body.name} details has been updated successfully`);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const student = await getStudent(id);
    res.send(student.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
