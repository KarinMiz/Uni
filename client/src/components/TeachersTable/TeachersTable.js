import React from "react";
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

const TeachersTable = (props) => {
  const imageApiUrl = "http://localhost:8080/staff/getPicture/";
  return (
    <div className="form-task">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Authority</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.teachers.map((s) => (
              <StyledTableRow key={s.id}>
                <StyledTableCell component="th" scope="row" align="left">
                  <CardMedia
                    component="img"
                    src={`${imageApiUrl}${s.id}`}
                    height="115"
                    sx={{ objectFit: "contain" }}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {s.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div>List of Authority</div>
                  <Button variant="contained" color="primary"  scope="row">
                      +
                    </Button>
                  </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <StyledTableRow >
                    <Button variant="contained" color="primary"  scope="row">
                      Editing Courses
                    </Button>
                  </StyledTableRow>
                  <StyledTableRow  sx={{ minWidth: 650 }}>
                    <Button variant="contained" color="primary"  scope="row">
                      Courses Manage
                    </Button>
                  </StyledTableRow>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Button variant="contained" color="primary">
                    Dismissal Teachers
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
