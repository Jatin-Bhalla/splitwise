import React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/groups">Groups</Link></li>
          <li><Link to="/friends">Friends</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </div>
  );
}