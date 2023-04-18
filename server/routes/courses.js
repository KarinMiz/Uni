const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCoursesForTeacher,
  getOpenCourses,
} = require("../api/courses");

router.get("/", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.send(courses.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const course = await getCoursesForTeacher(id);
    res.send(course.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/open", async (req, res) => {
  try {
    const courses = await getOpenCourses();
    res.send(courses.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
