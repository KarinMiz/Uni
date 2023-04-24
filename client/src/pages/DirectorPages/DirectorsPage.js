import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./DirectorPage.css";

const DirectorsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Director Page</h1>
      <div className="directors-pages-wrap">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={navigate("/teacherMangement")}
          >
            Changing Lists
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={navigate("/teacherMangement")}
          >
            Teachers Management
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={navigate("/teacherMangement")}
          >
            Students Management
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DirectorsPage;
