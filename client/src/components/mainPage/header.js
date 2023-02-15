import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="main_headSection">
      <div className="main_header">
        <h3>milan</h3>
        <Link to="/login" style={{ textDecoration: "none", color: "Black" }}>
          <div>Login</div>
        </Link>
      </div>
      <div className="main_section">
        <h3>Find Your "The One" Here</h3><div>
        <Link to="/signup" style={{ textDecoration: "none", color: "Black" }}>
          Join Here
        </Link></div>
      </div>
      <img src="./images/landing.jpg" className="couple"></img>
    </div>
  );
};

export default Header;
