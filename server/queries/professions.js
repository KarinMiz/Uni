const getAllProfessionsQuery = "SELECT * FROM professions";

const getProfessionQuery = "SELECT * FROM professions WHERE id = $1"

module.exports = {
    getAllProfessionsQuery,
    getProfessionQuery
}
