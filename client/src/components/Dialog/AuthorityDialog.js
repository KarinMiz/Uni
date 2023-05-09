import React, { useState,useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
} from "@mui/material";

const AuthorityDialog = (props) => {
  const professionsApiUrl = "http://localhost:8080/professions/";
  const authorityApiUrl = "http://localhost:8080/authorities/addAuthority";
  const [professions, setProfessions] = useState([]);
  const [existAuthorities, setExistAuthorities] = useState([]);
  const [avaliableAuthorities, setAvaliableAuthorities] = useState([]);

  const getAllProfessions = async () => {
    try {
      const res = await axios.get(professionsApiUrl);
      console.log("111111111111111111111111111111111");
      if (res.data?.length !== 0) {
        console.log("2222222222222222222222222222222222");
        setProfessions(res.data);
        console.log(professions);
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getTeacherAuthorities = async () => {
    try {
      const res = await axios.get(`${authorityApiUrl}${props.id}`);
      if (res.data?.length !== 0) {
        setExistAuthorities(res.data);
        console.log(existAuthorities);
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProfessions();
  }, []);
  useEffect(() => {
    getTeacherAuthorities();
    setAvaliableAuthorities(
      [...professions].filter(
        (authority) => existAuthorities.length >0 && !existAuthorities.includes(authority)
      )
    );
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>Add Authorities for {props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The avaliable authorities are:
          </DialogContentText>
          {
            avaliableAuthorities.map((a) => (
                <Checkbox>{a.p_name}</Checkbox>
            ))
          }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AuthorityDialog;
