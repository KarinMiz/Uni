import React from "react";
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
import "./StaffTable.css";

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

  return (
    <div className="form-task">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Professions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.staff.map((s) => (
              <StyledTableRow key={s.id}>
                <StyledTableCell component="th" scope="row">
                  <img src={s.picture}/>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {s.name}
                </StyledTableCell>
                <StyledTableCell align="left">{s.job}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Button variant="contained" color="primary">Manage Courses</Button>
                  <Button variant="contained" color="primary">Dismissal Teachers</Button>
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