import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <h6 className="site-title" onClick={()=>{window.location.href="/homePage"}} style={{cursor:'pointer'}}>TLV Uni</h6>
      <ul>
        <li className={path === "/homePage" ? "active" : ""}>
          <a href="/homePage">Home</a>
        </li>
        <li className={path === "/directorsPage" ? "active" : ""}>
          <a href="/directorsPage">Directors Pages</a>
        </li>
        {/* <li className={path === "/history" ? "active" : ""}>
          <a href="/history">History</a>
        </li> */}
      </ul>
    </nav>
  );
}
