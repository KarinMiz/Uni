import React, { useContext } from "react";
import { CurrentUserContext } from "../../App";
import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  const path = window.location.pathname;
  const currentUser = useContext(CurrentUserContext);
  const logoutApiUrl = "http://localhost:8080/logout";

  const handleLogout = async () => {
    const res = await axios.get(logoutApiUrl, { withCredentials: true });
    return res.data;
  };
  return (
    <nav className="nav">
      <h6
        className="site-title"
        onClick={() => {
          window.location.href = "/homePage";
        }}
        style={{ cursor: "pointer" }}
      >
        TLV Uni
      </h6>
      <div className="user-details">
        {" "}
        {currentUser.name
          ? `     ${currentUser.name} | role: ${currentUser.role}`
          : null}
      </div>
      {currentUser.name ? (
        <ul>
          <li className={path === "/homePage" ? "active" : ""}>
            <a href="/homePage">Home</a>
          </li>
          {currentUser.role === "director" ? (
            <li className={path === "/directorsPage" ? "active" : ""}>
              <a href="/directorsPage">Directors Pages</a>
            </li>
          ) : currentUser.role === "teacher" ? (
            <li className={path === "/teachersPage" ? "active" : ""}>
              <a href="/teachersPage">Teachers Pages</a>
            </li>
          ) : null}
          <li>
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
