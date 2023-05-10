import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
} from "@mui/material";

const AuthorityDialog = (props) => {

  const coursesApiUrl = "http://localhost:8080/courses/";
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const res = await axios.get(`${coursesApiUrl}${props.id}`);
      if (res.data?.length !== 0) {
        setCourses(res.data);
        console.log(courses);
        return courses;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addCourse = async (profession_id) => {
    try {
        const body={
            profession_id: profession_id,
            teacher_id: props.id,
            status: "open"
        }
      const res = await axios.post(`${coursesApiUrl}addCourse`,body);
      if (res.data?.length !== 0) {
        setCourses(res.data);
        console.log(courses);
        return courses;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCourses();
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
        Editing Courses
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit corses for {props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>The relevant courses:</DialogContentText>
          {courses.length > 0 ? (
            courses.map((c) => (
              <div>
                <Checkbox onChange={()=>addCourse(c.id)}/>
                <span color="black">{c.name}</span>
              </div>
            ))
          ) : (
            <div>No courses</div>
          )}
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
