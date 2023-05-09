const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getAllStudentsByCourseId,
  getAllCoursesByStudentId,
  addStudentToCourse,
  getAverageGradesbyCourseId,
  getAverageGradesbyStudentId,
} = require("../api/course_students");

router.get("/", async (req, res) => {
  try {
    const students = await getAllStudents();
    res.send(students.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getStudentsByCourseId", async (req, res) => {
  try {
    id = req.body.id;
    const students = await getAllStudentsByCourseId(id);
    res.send(students.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getCoursesByStudentId", async (req, res) => {
  try {
    id = req.body.id;
    const courses = await getAllCoursesByStudentId(id);
    res.send(courses.rows);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addStudentToCourse", async (req, res) => {
  try {
    const newStudent = await addStudentToCourse(req.body);
    res.send(newStudent);

    console.log("New Student has been added successfully to course");
  } catch (error) {
    res.send(error);
  }
});

router.get("/getAverageGradesbyCourseId", async (req, res) => {
  try {
    id = req.body.id;
    const average_grade = await getAverageGradesbyCourseId(id);
    res.send(average_grade.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getAverageGradesbyStudentId", async (req, res) => {
    try {
      id = req.body.id;
      const average_grade = await getAverageGradesbyStudentId(id);
      res.send(average_grade.rows);
    } catch (error) {
      res.send(error);
    }
  });

module.exports = router;