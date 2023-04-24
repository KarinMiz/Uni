// Access : only director
// 
import axios from "axios";
import React, { useEffect, useState } from "react";

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

      {teachers.length > 0 ? (
        <div className="staff">

        </div>
      ) : (
        <div>No Staff</div>
      )}
    </div>
  );
};

export default StudentsManagement;

