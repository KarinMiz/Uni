const getAllCoursesQuery = "SELECT * FROM courses";

const getCoursesForTeacherQuery = "SELECT * FROM courses WHERE teacher_id = $1"

const getOpenCoursesQuery = "SELECT * FROM staff courses WHERE status=TRUE";

const addCourseQuery = "INSERT INTO courses(id,profession_id,teacher_id,status) VALUES ($1, $2, $3, $4)";

const getCourseQuery = "SELECT * FROM courses WHERE id = $1"

module.exports = {
    getAllCoursesQuery,
    getCoursesForTeacherQuery,
    getOpenCoursesQuery,
    addCourseQuery,
    getCourseQuery
}
