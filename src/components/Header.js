import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(120, 120, 120" }}
      >
        <NavLink to="/" className="btn" style={{ cloro: "white" }}>
          Home
        </NavLink>
        <NavLink to="/add" className="btn" style={{ cloro: "white" }}>
          Add
        </NavLink>
        <NavLink to="/about" className="btn" style={{ cloro: "white" }}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
