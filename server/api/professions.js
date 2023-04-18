const runQuery = require("./helpers/runQuery");
const {
    getAllProfessionsQuery,
    getProfessionQuery
} = require("../queries/professions");

const getAllProfessions = async () => {
  return await runQuery(getAllProfessionsQuery);
};

const getProfession = async (id) => {
  return await runQuery(getProfessionQuery, [id]);
};

module.exports = {
    getAllProfessions,
    getProfession};
