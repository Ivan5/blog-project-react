import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>Social media</div>
    </header>
  );
}

export default Header;
