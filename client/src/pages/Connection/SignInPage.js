import React, { useEffect, useState } from "react";
import { Input, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const loginApiUrl = "http://localhost:8080/login";
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);

  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
    if (id && password) {
      e.preventDefault();
      try {
        const body = {
          id: id,
          password: password,
        };
        const res = await axios.post(loginApiUrl, body, { withCredentials: true });
       console.log(res);
        if (res.data === "user doesnt exist") {
          setMessage("user doesnt exist");
        } else if (res.data === "wrong password") {
          setMessage("wrong password");
        }
        else{
          navigate("/homePage");
        }
        
        return res.data;
      } catch (error) {
        console.log(error);
      }
    } else {
      setMessage("one of the fields is missing")
    }
  };
  return (
    <div>
      <title>TLV University</title>
      <h3>your management site</h3>
      <Grid
        container
        spacing={5}
        alignItems="left"
        justifyContent="center"
        mt={3}
      >
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
        <Grid item xs={8}>
          <h3 className="error-msg">{message}</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInPage;
