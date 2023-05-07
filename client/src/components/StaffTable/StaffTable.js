import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  CardMedia,
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
import axios from "axios";

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


const StaffTable = (props) => {
  const [image, setImage] = useState([]);
  const imageApiUrl = "http://localhost:8080/staff/getPicture/"
  // const getImage = async (id) => {
  //   try {
  //     const res = await axios.get(`${imageApiUrl}${id}`);
  //     setImage(res.data);
  //     console.log(image);
  //     return res.data;   
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  return (
    <Paper className="form-task">
      <TableContainer> 
        {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}
        <Table stickyHeader aria-label="sticky table" >
          <TableHead  >
            <TableRow >
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              {props.type === "b" ?
              <TableCell>Birthday Date</TableCell>
              :
              <TableCell>Job</TableCell>
              }
              
            </TableRow>
          </TableHead>
          <TableBody>
            {props.staff.map((s) => (
              <StyledTableRow key={s.id}>
                <StyledTableCell component="th" scope="row" align="left">
                  <CardMedia component="img" src={`${imageApiUrl}${s.id}`} height="115"  sx={{objectFit: "contain" }}  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {s.name}
                </StyledTableCell>
                {props.type === "b" ? 
                <StyledTableCell align="left">
                  {new Date (s.birthday).toLocaleDateString(undefined, {month: "short", day: "numeric"})}
                </StyledTableCell>
                : 
                <StyledTableCell align="left">{s.job}</StyledTableCell>
                }
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StaffTable;
