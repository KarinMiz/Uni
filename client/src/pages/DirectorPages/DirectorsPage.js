import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./DirectorPage.css";

const DirectorsPage = () => {
  const navigate = useNavigate();

  const handleButtonClick01 = () => {
    navigate("/changingLists");
  };

  const handleButtonClick02 = () => {
    navigate("/teacherManagement");
  };

  const handleButtonClick03 = () => {
    navigate("/studentManagement");
  };

  const handleButtonClick04 = () => {
    navigate("/studentManagement");
  };

  return (
    <div>
      <h1>Director Page</h1>
      <div className="directors-pages-wrap">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick01}
          >
            Changing Lists
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick02}
          >
            Teachers Management
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick03}
          >
            Students Management
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick04}
          >
            Courses Display
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
