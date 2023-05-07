import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./Navbar.css";
import axios from "axios";

export default function Navbar() {
  const path = window.location.pathname;
  const userContext = useContext(UserContext);
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
      <span className="user-details">
        {userContext.currentUser.name ? (
          <span>
            <div>{userContext.currentUser.name}</div>
            <div>role: {userContext.currentUser.role}</div>
          </span>
        ) : null}
      </span>
      {userContext.currentUser.name ? (
        <ul>
          <li className={path === "/homePage" ? "active" : ""}>
            <a href="/homePage">Home</a>
          </li>
          {userContext.currentUser.role === "director" ? (
            <li className={path === "/directorsPage" ? "active" : ""}>
              <a href="/directorsPage">Directors Pages</a>
            </li>
          ) : userContext.currentUser.role === "teacher" ? (
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
