const runQuery = require("./helpers/runQuery");
const {
    registerQuery
} = require("../queries/auth");

const register = async () => {
    return await runQuery(registerQuery);
  };

  module.exports = {
    register,
  }