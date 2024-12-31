import React from "react";
import { NavLink} from "react-router-dom";

const navBar = () => {
  return (
    <div className="d-flex justify-content-between px-5 py-3 align-items-center">
      <NavLink to="/home" className="fw-bold fs-1">
        Blog App
      </NavLink>
      <div className="d-flex gap-4">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </div>
    </div>
  );
};

export default navBar;
