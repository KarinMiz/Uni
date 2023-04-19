const runQuery = require("./helpers/runQuery");
const {
  getAllStudentsQuery,
  addStudentQuery,
  updateStudentQuery,
  getStudentQuery,
} = require("../queries/students");

const getAllStudents = async () => {
  return await runQuery(getAllStudentsQuery);
};

const addStudent = async (values) => {
  return await runQuery(addStudentQuery, [
    values[0],
    values[1],
    values[2]
  ]);
};

const updateStudent = async (values) => {
  return await runQuery(updateStudentQuery, [
    values[0],
    values[1],
    values[2]
  ]);
};

const getStudent = async (id) => {
  return await runQuery(getStudentQuery, [id]);
};

module.exports = {
  getAllStudents,
  addStudent,
  updateStudent,
  getStudent,
};
