const getAllCoursesQuery = "SELECT courses.id,professions.name as p_name,staff.name as t_name,courses.status   FROM courses JOIN professions ON courses.profession_id = professions.id JOIN staff ON courses.teacher_id = staff.id";

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
