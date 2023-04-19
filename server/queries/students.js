const getAllStudentsQuery = "SELECT * FROM students";

const addStudentQuery = "INSERT INTO students(id,name,yearbook) VALUES ($1, $2, $3)";

const updateStudentQuery = "UPDATE students SET name=$1, yearbook=$2 WHERE id=$3";

const getStudentQuery = "SELECT * FROM students WHERE id = $1"

module.exports = {
    getAllStudentsQuery,
    addStudentQuery,
    updateStudentQuery,
    getStudentQuery
}


