const getAllStaffQuery = "SELECT * FROM staff";

const addStaffQuery = "INSERT INTO staff(id,name,password,job,gender,birthday,picture) VALUES ($1, $2, $3, $4, $5, $6, $7)";

const updateStaffQuery = "UPDATE staff SET name=$2, password=$3, job=$4, gender=$5, birthday=$6, picture=$7 WHERE id=$8";

const getStaffQuery = "SELECT * FROM staff WHERE id = $1"

module.exports = {
    getAllStaffQuery,
    addStaffQuery,
    updateStaffQuery,
    getStaffQuery
}


