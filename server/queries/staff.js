const getAllStaffQuery = "SELECT * FROM staff";

const addStaffQuery = "INSERT INTO staff(id,name,password,job,gender,birthday) VALUES ($1, $2, $3, $4, $5, $6)";

const updateStaffQuery = "UPDATE staff SET name=$1, password=$2, job=$3, gender=$4, birthday=$5 WHERE id=$6";

const getStaffQuery = "SELECT * FROM staff WHERE id = $1"

const deleteStaffQuery = "DELETE FROM staff WHERE id = $1";

const getTeachersQuery = "SELECT * FROM staff WHERE job='teacher'";

const getRoleByIdQuery = "SELECT job FROM staff WHERE id = $1"


module.exports = {
    getAllStaffQuery,
    addStaffQuery,
    updateStaffQuery,
    getStaffQuery,
    deleteStaffQuery,
    getTeachersQuery,
    getRoleByIdQuery
}


