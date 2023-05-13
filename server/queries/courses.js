const getAllCoursesQuery = "SELECT courses.id,professions.name as p_name,staff.name as t_name,courses.status FROM courses JOIN professions ON courses.profession_id = professions.id JOIN staff ON courses.teacher_id = staff.id";

const getCoursesForTeacherQuery = "SELECT courses.id,courses.name,professions.name as p_name,courses.status FROM courses JOIN professions ON courses.profession_id = professions.id WHERE teacher_id = $1"

const getOpenCoursesQuery = "SELECT * FROM staff courses WHERE status=TRUE";

const addCourseQuery = "INSERT INTO courses(profession_id,teacher_id,status) VALUES ($1, $2, $3)";

const getCourseQuery = "SELECT * FROM courses WHERE id = $1"

module.exports = {
    getAllCoursesQuery,
    getCoursesForTeacherQuery,
    getOpenCoursesQuery,
    addCourseQuery,
    getCourseQuery
}
