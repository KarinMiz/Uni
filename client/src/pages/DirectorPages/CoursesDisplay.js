import axios from "axios";
import React, { useEffect, useState } from "react";
import CoursesTable from "../../components/CoursesTable/CoursesTable";

const StudentsManagement = () => {
  const [courses, setCourses] = useState([]);
  const apiUrl = "http://localhost:8080/courses";

  const fetchAllStaff = async () => {
    try {
      const res = await axios.get(apiUrl);
      setCourses(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllStaff();
  }, []);

  return (
    <div>
      <h1>Courses Display</h1>
      {courses.length > 0 ? (
        <div className="students">
            <CoursesTable courses={courses}/>
        </div>
      ) : (
        <div>No Courses</div>
      )}
    </div>
  );
};

export default StudentsManagement;

