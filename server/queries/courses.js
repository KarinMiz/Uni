const getAllCoursesQuery = "SELECT * FROM courses";

const getCoursesForTeacherQuery = "SELECT * FROM courses WHERE teacher_id = $1"

const getOpenCoursesQuery = "SELECT * FROM staff courses WHERE status=TRUE";


module.exports = {
    getAllCoursesQuery,
    getCoursesForTeacherQuery,
    getOpenCoursesQuery
}
