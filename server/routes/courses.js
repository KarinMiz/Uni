const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCoursesForTeacher,
  getOpenCourses,
  addCourse,
  getCourse
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

router.post("/addCourse", async (req, res) => {
  try {
    const values = [
      req.body.id,
      req.body.profession_id,
      req.body.teacher_id,
      req.body.status
    ];

    const newCourse = await addCourse(values);
    res.send(newCourse);

    console.log("New course member has been created successfully");
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const course = await getCourse(id);
    res.send(course.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
