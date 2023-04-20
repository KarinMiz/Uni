import { Input } from "@mui/material";
import axios from "axios";
import React from "react";

const SignInPage = () => {
  const apiUrl = "http://localhost:8080/staff/addStaff";

  return (
    <div>
      <h1 className="title">Welcome!</h1>

      <h4>ID</h4>
      <input></input>
      <h4>Password</h4>
      <input></input>
      <button>Sign In</button>
      <h5>New Here?</h5>
      <a href="/regist">Create  an acoount</a>
    </div>
  );
};

export default SignInPage;
