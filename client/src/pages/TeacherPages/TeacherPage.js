import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { UserContext } from "../../App";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TeacherPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const [courses, setCourses] = useState([]);
  const apiUrl = "http://localhost:8080/courses/";

  const handleButtonClick = (courseID) => {
    console.log("HI IM HERE");
    console.log(courseID); 
    navigate(`/CoursePage`,{state: {courseId: courseID}} );
  };

  const getCourses = async () => {
    try {
      const res = await axios.get(`${apiUrl}${userContext.currentUser.id}`);
      console.log(res.data);
      setCourses(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getCourses();
  }, [userContext]);

  return (
    <div className="form-task">
      <h1>Courses Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Profession</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.length>0?
             courses.map((c) => (
              
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="left">
                {c.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
              {c.p_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {c.status}
                </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Button variant="contained" color="primary" scope="row" onClick={()=>handleButtonClick(c.id)}>
                  course page
                </Button>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            )) : null} 
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherPage;
