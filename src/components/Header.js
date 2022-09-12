import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(120, 120, 120" }}
      >
        <Link to="/" className="btn" style={{ cloro: "white" }}>
          Home
        </Link>
        <Link to="/add" className="btn" style={{ cloro: "white" }}>
          Add
        </Link>
        <Link to="/about" className="btn" style={{ cloro: "white" }}>
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
