import React from "react";
import {
  Input,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const SignInPage = () => {
  const navigate = useNavigate();
  // const registerApiUrl = "http://localhost:8080/auth/register";
  // const addStaffApiUrl = "http://localhost:8080/staff/addStaff";
  const handleChangeId = (e) => {};
  const handleChangePassword = (e) => {};
  const handleClick = async (e) => {
    // if (id && name && password && role && gender) {
    e.preventDefault();
    try {
      // const body = {

      // };

      navigate("/homePage");
    } catch (error) {
      console.log(error);
    }
    // }
  };
  return (
    <div>
      <title>TLV University</title>
      <h3>your management site</h3>
      <Grid container spacing={5} alignItems="left" justifyContent="center" mt={3}>
        <Grid item xs={8}>
          <Input placeholder="ID number" onChange={handleChangeId}></Input>
        </Grid>
        <Grid item xs={8}>
          <Input placeholder="Password" onChange={handleChangePassword}></Input>
        </Grid>
        <Grid item xs={8}>
          <Button onClick={handleClick} variant="contained" color="primary">
            Sign In
          </Button>
        </Grid>
        <Grid item xs={8}>
          New Here?
          <a href="/regist"> Create an acoount</a>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInPage;
