import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
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

const TeachersTable = (props) => {
  const [staff, setStaff] = useState([]);
  const [course, setCourse] = useState([]);
  const apiUrl = "http://localhost:8080/courses";
  const getStaffIdApiUrl = "http://localhost:8080/staff";
  const getCourseIdApiUrl = "http://localhost:8080/professions";

  // const getCourse = async (id) => {
  //   try {
  //     const res = await axios.get(`${getStaffIdApiUrl}/${id}`);
  //     console.log(res.data[0]);
  //     setStaff(res.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getStaffId = async (id) => {
  //   try {
  //     const res = await axios.get(`${getStaffIdApiUrl}/${id}`);
  //     console.log(res.data[0]);
  //     setStaff(res.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getCourseId = async (id) => {
  //   try {
  //     const res = await axios.get(`${getCourseIdApiUrl}/${id}`);  
  //     console.log(res.data[0]);
  //     setCourse(res.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getStaffId(525788989);
    // getCourseId(1);
  }, []);



  return (
    <div className="form-task">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Profession</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.courses.map((c) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {c.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {c.p_name}
                  {console.log(c)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {c.t_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {c.status}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Button variant="contained" color="primary">
                    delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeachersTable;
