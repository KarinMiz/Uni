const runQuery = require("./helpers/runQuery");
const bcrypt = require('bcrypt');
const {
  getAllStaffQuery,
  addStaffQuery,
  updateStaffQuery,
  getStaffQuery,
  deleteStaffQuery,
  getTeachersQuery
} = require("../queries/staff");

const getAllStaff = async () => {
  return await runQuery(getAllStaffQuery);
};

const addStaff = async (values) => {
  const saltRounds = 10;

  const hash = await bcrypt.hash( values.password,saltRounds)

    return await runQuery(addStaffQuery, [
      values.id,
      values.name,
      hash,
      values.job,
      values.gender,
      values.birthday, 
    ]);
  };

const updateStaff = async (values) => {
  return await runQuery(updateStaffQuery, [
    values.id,
    values.name,
    values.password,
    values.job,
    values.gender,
    values.birthday, 
  ]);
};

const getStaff = async (id) => {
  return await runQuery(getStaffQuery, [id]);
};

const getTeachers = async (id) => {
  return await runQuery(getTeachersQuery, [id]);
};

const deleteStaff = async (id) => {
  return await runQuery(deleteStaffQuery, [id]);
};


module.exports = {
    getAllStaff,
    addStaff,
    updateStaff,
    getStaff,
    deleteStaff,
    getTeachers
};
