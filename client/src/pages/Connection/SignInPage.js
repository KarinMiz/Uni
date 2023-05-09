import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { Input, Button, Grid } from "@mui/material";
import { useNavigate,redirect } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const navigate = useNavigate();
  const loginApiUrl = "http://localhost:8080/login";
  const currentuserApiUrl = "http://localhost:8080/currentUser";
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(null);
  const userContext = useContext(UserContext);
  
  // const [currentUser, setCurrentUser] = useState({});
  // const loader = async () => {
  //   if(userContext.currentUser.id){
  //     return redirect("/homePage");
  //   }
  //   return null;
  // };
  const checkSession = async () => {
    try {
      const res = await axios.get(currentuserApiUrl, { withCredentials: true });
      console.log(res.data);
      // setCurrentUser({
      //   id: res.data.id,
      //   name:res.data.name,
      //   role: res.data.role,
      // });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // loader();
    checkSession();
  }, []);


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
        checkSession();
        const res = await axios.post(loginApiUrl, body, { withCredentials: true });
      //  console.log(res.data);
        if (res.data === "user doesnt exist") {
          setMessage("user doesnt exist");
        } else if (res.data === "wrong password") {
          setMessage("wrong password");
        }
        else{
          //login
          userContext.setCurrentUser({
            id: res.data.id,
            name:res.data.name,
            role: res.data.role,
          }); 
          console.log("---------------"+userContext.currentUser);
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
      <h1>Sign In Page</h1>
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
          <a href="/register"> Create an acoount</a>
        </Grid>       
        <Grid item xs={8}>
          <h3 className="error-msg">{message}</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInPage;
