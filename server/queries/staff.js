const getAllStaffQuery = "SELECT * FROM staff";

const addStaffQuery = "INSERT INTO staff(id,name,password,job,gender,birthday,picture) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const updateStaffQuery = "UPDATE staff SET name=$1, password=$2, job=$3, gender=$4, birthday=$5, picture=$6 WHERE id=$7";

const getStaffQuery = "SELECT * FROM staff WHERE id = $1"

const deleteStaffQuery = "DELETE FROM staff WHERE id = $1;";

module.exports = {
    getAllStaffQuery,
    addStaffQuery,
    updateStaffQuery,
    getStaffQuery,
    deleteStaffQuery
}


