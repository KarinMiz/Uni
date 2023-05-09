const getAllStudentsQuery = "SELECT * FROM course_students";

const getAllStudentsByCourseIdQuery = "SELECT * FROM course_students WHERE student_id = $1";

const getAllCoursesByStudentIdQuery = "SELECT * FROM course_students WHERE course_id = $1";

const addStudentToCourseQuery = "INSERT INTO course_students(course_id,student_id,grade) VALUES ($1, $2, $3)";

const getAverageGradesbyCourseIdQuery = "SELECT AVG(grade) AS average_grade FROM course_students WHERE course_id = $1";

const getAverageGradesbyStudentIdQuery = "SELECT AVG(grade) AS average_grade FROM course_students WHERE student_id = $1";


module.exports = {
    getAllStudentsQuery,
    getAllStudentsByCourseIdQuery,
    getAllCoursesByStudentIdQuery,
    addStudentToCourseQuery,
    getAverageGradesbyCourseIdQuery,
    getAverageGradesbyStudentIdQuery
}


