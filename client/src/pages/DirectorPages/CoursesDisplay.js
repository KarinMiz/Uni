import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentTable from "../../components/StudentsTable/StudentsTable";

const StudentsManagement = () => {
  const [students, setStudents] = useState([]);
  const apiUrl = "http://localhost:8080/students";

  const fetchAllStaff = async () => {
    try {
      const res = await axios.get(apiUrl);
      setStudents(res.data);
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
      <h1>Students Management</h1>
      {students.length > 0 ? (
        <div className="students">
            <StudentTable students={students}/>
        </div>
      ) : (
        <div>No Students</div>
      )}
    </div>
  );
};

export default StudentsManagement;

