const runQuery = require("./helpers/runQuery");
const {
    getAllCoursesQuery,
    getCoursesForTeacherQuery,
    getOpenCoursesQuery
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

module.exports = {
    getAllCourses,
    getCoursesForTeacher,
    getOpenCourses};
