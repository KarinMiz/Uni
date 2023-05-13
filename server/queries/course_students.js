const getAllStudentsQuery = "SELECT courses.name as c_name,students.id as s_id,students.name as s_name,course_students.grade FROM course_students JOIN students ON course_students.student_id = students.id JOIN courses ON course_students.course_id = courses.id";

const getAllStudentsByCourseIdQuery = "SELECT courses.name as c_name,students.id as s_id,students.name as s_name,course_students.grade FROM course_students JOIN students ON course_students.student_id = students.id JOIN courses ON course_students.course_id = courses.id WHERE course_id = $1";

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


