import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const addStaffApiUrl = "http://localhost:8080/staff/addStaff";
  const uploadApiUrl = "http://localhost:8080/staff/upload";
  const currentDate = new Date().toISOString().slice(0, 16);
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [gender, setGender] = useState();
  const [birthday, setBirthday] = useState();
  const [picture, setPicture] = useState();

  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleChangePicture = (e) => {
    setPicture(e.target.value);
    console.log("upload:" + e.target.value);
  };
  const pictureUpload = async () => {
    try {
      await axios.post(uploadApiUrl, { picture: picture, fileName: id });
      console.log("Uploading picture:", picture);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    // if (id && name && password && role && gender) {
    e.preventDefault();
    try {
      const body = {
        id: id,
        name: name,
        password: password,
        job: role,
        gender: gender,
        birthday: birthday,
        picture: picture,
      };
      console.log(body);
      await axios.post(addStaffApiUrl, body);
      pictureUpload();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // }
  };
  return (
    <div>
      <h1 className="title">Registration Page</h1>

      <input placeholder="ID number" onChange={handleChangeId}></input>
      <input placeholder="Full Name" onChange={handleChangeName}></input>
      <input placeholder="Password" onChange={handleChangePassword}></input>
      <select onChange={handleChangeRole}>
        <option value={null}>Select your role</option>
        <option value="director">director</option>
        <option value="teacher">teacher</option>
      </select>
      <select onChange={handleChangeGender}>
        <option value={null}>Select Gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <input
        type="date"
        placeholder="deadline"
        max={currentDate}
        name="birthday-date"
        onChange={handleChangeBirthday}
        required
      />
      <input type="file" accept="image/*" onChange={handleChangePicture} />
      <button onClick={handleClick}>Sign up</button>
    </div>
  );
};

export default RegistrationPage;
