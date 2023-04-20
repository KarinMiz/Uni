import axios from "axios";
import React, { useEffect, useState } from "react";
import StaffTable from "../../components/StaffTable/StaffTable";

const HomePage = () => {
  const [staff, setStaff] = useState([]);
  const [birthdayList, setBirthdayList] = useState([]);

  // Get the current date and time
  const now = new Date();

  // Calculate the date that is exactly one week from today
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(now.getDate() + 7);

  const apiUrl = "http://localhost:8080/staff";

  const fetchAllStaff = async () => {
    try {
      const res = await axios.get(apiUrl);
      setStaff(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getDayOfYear = (date) => {
    return (Date.UTC(new Date(date).getFullYear(),
        new Date(date).getMonth(),
        new Date(date).getDate()) - Date.UTC(new Date(date).getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
  }



  useEffect(() => {
    fetchAllStaff();
  }, []);

  useEffect(() => {
    const birthdayFilter = async () => {
      setBirthdayList(staff.filter((s) => {
          return Math.abs(getDayOfYear(new Date()) - getDayOfYear(s.birthday)) <= 7
      }))
    };
    birthdayFilter();
  }, [staff])

  return (
    <div>
      <h1>Current Staff:</h1>

      {staff.length > 0 ? (
        <div className="staff">
          <StaffTable staff={staff} />
        </div>
      ) : (
        <div>No Staff</div>
      )}

      <h1>Birthday of the week</h1>
      {birthdayList.length > 0 ? (
        <div className="staff">
          <StaffTable staff={birthdayList} />
        </div>
      ) : (
        <div>No birthday</div>
      )}
    </div>
  );
};

export default HomePage;
