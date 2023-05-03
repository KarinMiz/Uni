import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";

const RegistrationPage = () => {
  const addStaffApiUrl = "http://localhost:8080/staff/addStaff";
  const uploadApiUrl = "http://localhost:8080/staff/upload";
  const checkIdApiUrl = "http://localhost:8080/staff/";
  const currentDate = new Date().toISOString().slice(0, 16);
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("teacher");
  const [gender, setGender] = useState("female");
  const [birthday, setBirthday] = useState();
  const [picture, setPicture] = useState();
  const [isExist, setIsExist] = useState(false);
  const [message, setMessage] = useState(null);

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
    setPicture(e.target.files[0]);
  };
  const pictureUpload = async () => {
    const data = new FormData();
    data.append("file", picture);
    try {
      await fetch(`${uploadApiUrl}/${id}`, {
        method: "POST",
        body: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (message) {
      const timerId = setTimeout(() => {
        setMessage(null);
      }, 5000);
      return () => clearTimeout(timerId);
    }
  }, [message]);

  const handleClick = async (e) => {
    // Check id
    const existId = await axios.get(`${checkIdApiUrl}${id}`);

    if (id && existId.data[0]) {
      setIsExist(true);
      setMessage("User id already exists! Please choose another id or sign in ");
    } else if (id && name && password && birthday) {
      e.preventDefault();
      try {
        const body = {
          name: name,
          password: password,
          job: role,
          gender: gender,
          birthday: birthday,
          id: id
        };
        console.log(body);
        await axios.post(addStaffApiUrl, body ,{ withCredentials: true });
        pictureUpload();
        navigate("/homePage");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Typography m={5} variant="h3">
        Registration Page
      </Typography>
      <Grid
        container
        spacing={5}
        alignItems="left"
        justifyContent="flex-start"
        display={"flex"}
      >
        <Grid item xs={8}>
          <Input placeholder="ID number" onChange={handleChangeId}></Input>
        </Grid>
        <Grid item xs={8}>
          <Input placeholder="Full Name" onChange={handleChangeName}></Input>
        </Grid>
        <Grid item xs={8}>
          <Input placeholder="Password" onChange={handleChangePassword}></Input>
        </Grid>
        <Grid item xs={8}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select onChange={handleChangeRole} label="Role" defaultValue={role}>
              <MenuItem value="director">director</MenuItem>
              <MenuItem value="teacher">teacher</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select onChange={handleChangeGender} label="Gender" defaultValue={gender}>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="male">male</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <Input
            type="date"
            placeholder="deadline"
            max={currentDate}
            name="birthday-date"
            onChange={handleChangeBirthday}
            required
          />
        </Grid>
        <Grid item xs={8}>
          <Input type="file" accept="image" onChange={handleChangePicture} />
        </Grid>
        <Grid item xs={8}>
          <Button onClick={handleClick} variant="contained" color="primary">
            Sign up
          </Button>
          {
            isExist? <h3>{message}</h3>
            : <></>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default RegistrationPage;
