// Access : only director
// Director can edit lists of professions and lists of locations

import axios from "axios";
import React from "react";
import {
  Input,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


const ChangingLists = () => {
  const navigate = useNavigate();

  
  return (
    <div>
      <title>Professions</title>
      <title>Locations</title>
    </div>
  );
};

export default ChangingLists;
