import React from "react";
import { styled } from "@mui/material/styles";
import {
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

// const [selectedFile, setSelectedFile] = useState(null);
// const uploadPicture = (picture) => {
//   setSelectedFile(picture);
//   handleUpload();
// }
// const handleUpload = () => {
//   const formData = new FormData();
//   formData.append('image', selectedFile);
//   axios.post('/upload', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.error(error);
//   });
// }

const StaffTable = (props) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="form-task">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
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
                <StyledTableCell component="th" scope="row">
                  <img src={s.picture} alt={`${s.id} user pic`}/>
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
    </div>
  );
};

export default StaffTable;
