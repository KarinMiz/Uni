const runQuery = require("./helpers/runQuery");
const {
    getAllCoursesQuery,
    getCoursesForTeacherQuery,
    getOpenCoursesQuery,
    addCourseQuery,
    getCourseQuery
} = require("../queries/courses");

const getAllCourses = async () => {
  return await runQuery(getAllCoursesQuery);
};

const getCoursesForTeacher = async (id) => {
  return await runQuery(getCoursesForTeacherQuery, [id]);
};

const getOpenCourses = async () => {
    return await runQuery(getOpenCoursesQuery);
  };

  const addCourse = async (values) => {
    return await runQuery(addCourseQuery, [
      values[0],
      values[1],
      values[2],
      values[3]
    ]);
  };

  const getCourse = async (id) => {
    return await runQuery(getCourseQuery, [id]);
  };


module.exports = {
    getAllCourses,
    getCoursesForTeacher,
    getOpenCourses,
    addCourse,
    getCourse
  };
