import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import Student from "../../assets/stu.png";

function Navbar({ stuIcon }) {
  const history = useHistory("");

  return (
    <div className="navbar card-navbar">
      <span>Attendance Manager</span>
      {stuIcon && (
        <img
          src={Student}
          alt=""
          className="stu-icon"
          onClick={() => history.push("/students")}
        />
      )}
    </div>
  );
}
export default Navbar;
