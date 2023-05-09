const runQuery = require("./helpers/runQuery");
const {
  getAllStudentsQuery,
  getAllStudentsByCourseIdQuery,
  getAllCoursesByStudentIdQuery,
  addStudentToCourseQuery,
  getAverageGradesbyCourseIdQuery,
  getAverageGradesbyStudentIdQuery,
} = require("../queries/course_students");

const getAllStudents = async () => {
  return await runQuery(getAllStudentsQuery);
};

const getAllStudentsByCourseId = async (id) => {
  return await runQuery(getAllStudentsByCourseIdQuery, [id]);
};

const getAllCoursesByStudentId = async (id) => {
    return await runQuery(getAllCoursesByStudentIdQuery, [id]);
  };

  
const addStudentToCourse = async (values) => {

      return await runQuery(addStudentToCourseQuery, [
        values.course_id,
        values.student_id,
        values.grade,
      ]);
    };

    const getAverageGradesbyCourseId = async (id) => {
        return await runQuery(getAverageGradesbyCourseIdQuery, [id]);
      };
      const getAverageGradesbyStudentId = async (id) => {
        return await runQuery(getAverageGradesbyStudentIdQuery, [id]);
      };

module.exports = {
  getAllStudents,
  getAllStudentsByCourseId,
  getAllCoursesByStudentId,
  addStudentToCourse,
  getAverageGradesbyCourseId,
  getAverageGradesbyStudentId
};
