import React from "react";
import "./style.css";
import Card from "../UI/Card";
import Logo from "../Logo";
import Navbar from "../Navbar";

function Hero() {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar></Navbar>
      </Card>
    </div>
  );
}

export default Hero;
