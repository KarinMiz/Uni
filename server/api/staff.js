const runQuery = require("./helpers/runQuery");
const {
  getAllStaffQuery,
  addStaffQuery,
  updateStaffQuery,
  getStaffQuery,
  deleteStaffQuery,
} = require("../queries/staff");

const getAllStaff = async () => {
  return await runQuery(getAllStaffQuery);
};

const addStaff = async (values) => {
    return await runQuery(addStaffQuery, [
      values[0],
      values[1],
      values[2],
      values[3],
      values[4],
      values[5],
      values[6]
    ]);
  };

const updateStaff = async (values) => {
  return await runQuery(updateStaffQuery, [
    values[0],
    values[1],
    values[2],
    values[3],
    values[4],
    values[5],
    values[6]
  ]);
};

const getStaff = async (id) => {
  return await runQuery(getStaffQuery, [id]);
};

const deleteStaff = async (id) => {
  return await runQuery(deleteStaffQuery, [id]);
};


module.exports = {
    getAllStaff,
    addStaff,
    updateStaff,
    getStaff,
    deleteStaff
};
