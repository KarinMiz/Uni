const runQuery = require("./helpers/runQuery");
const {
    getAllAuthoritiesQuery,
    addAuthorityQuery,
    updateAuthorityQuery,
    getTeacherAuthorityQuery,
    isExistAuthorityQuery
  } = require("../queries/authorities");

  const getAllAuthorities = async () => {
    return await runQuery(getAllAuthoritiesQuery);
  };

  const addAuthority = async (values) => {

      return await runQuery(addAuthorityQuery, [
        values.profession_id,
        values.teacher_id,
        values.isAvaliable,
      ]);
    };

    const updateAuthority = async (values) => {
        return await runQuery(updateAuthorityQuery, [
            values.isAvaliable,
            values.profession_id,
            values.teacher_id,
        ]);
      };

      const getTeacherAuthority = async (id) => {
        return await runQuery(getTeacherAuthorityQuery, [id]);
      };

      const isExistAuthority = async (values) => {
        return await runQuery(isExistAuthorityQuery, [
            values.profession_id,
            values.teacher_id,
        ]);
      };

  module.exports = {
    getAllAuthorities,
    addAuthority,
    updateAuthority,
    getTeacherAuthority,
    isExistAuthority,

};