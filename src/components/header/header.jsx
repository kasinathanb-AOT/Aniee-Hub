import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import ProfileIcon from "../../assets/profile1.png";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header" onMouseLeave={toggleDropdown}>
      <div className="left">
        <img src={Logo} alt="logo" className="logo" />
        <h3>An!ee Hub</h3>
      </div>
      <div className="right">
        <img src={ProfileIcon} className="profile" alt="profile"  onClick={toggleDropdown} />
        {showDropdown && (
          <div className="dropdown">
            <ul>
              <li>Sign Up</li>
              <li>Login</li>
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Header;
