import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <h3>An!ee Hub</h3>
    </div>
  );
}

export default Header;