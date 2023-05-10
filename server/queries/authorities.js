const getAllAuthoritiesQuery = "SELECT * FROM authorities";

const addAuthorityQuery = "INSERT INTO authorities(profession_id,teacher_id,isavaliable) VALUES ($1, $2, $3)";

const updateAuthorityQuery = "UPDATE authorities SET isavaliable=$1 WHERE profession_id=$2 AND teacher_id=$3";

const getTeacherAuthorityQuery = "SELECT professions.name as p_name FROM authorities JOIN professions ON authorities.profession_id = professions.id WHERE teacher_id = $1 AND isavaliable=true"

const isExistAuthorityQuery = "SELECT * FROM authorities WHERE profession_id = $1 AND teacher_id=$3"



module.exports = {
    getAllAuthoritiesQuery,
    addAuthorityQuery,
    updateAuthorityQuery,
    getTeacherAuthorityQuery,
    isExistAuthorityQuery
}