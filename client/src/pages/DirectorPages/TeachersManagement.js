// Access : only director
// List of teachers
import axios from "axios";
import React, { useEffect, useState } from "react";
import TeachersTable from "../../components/TeachersTable/TeachersTable";

const TeachersManagement = () => {
  const [teachers, setTeachers] = useState([]);

  // Get the current date and time
  const now = new Date();

  // Calculate the date that is exactly one week from today
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(now.getDate() + 7);

  const apiUrl = "http://localhost:8080/staff";

  const fetchAllStaff = async () => {
    try {
      const res = await axios.get(apiUrl);
      setTeachers(res.data);
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
      <h1>Teachers Management</h1>

      {teachers.length > 0 ? (
        <div className="staff">
          <TeachersTable
            teachers={teachers.filter((t) => t.job === "teacher")}
          />
        </div>
      ) : (
        <div>No Staff</div>
      )}
    </div>
  );
};

export default TeachersManagement;

