import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  CardMedia,
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
  const coursesList = {};
  const handleButtonClick01 = () => {
    navigate("/coursesManagement");
  };

  return (
    <div className="form-task">
      <h1>Courses Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {coursesList.map((s) => ( */}
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" align="left">
                name
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                professor
              </StyledTableCell>
              <StyledTableCell align="left">close / open</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Button variant="contained" color="primary" scope="row">
                  course page
                </Button>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row"></StyledTableCell>
            </StyledTableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherPage;
