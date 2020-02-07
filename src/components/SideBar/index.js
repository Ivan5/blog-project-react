import React from "react";
import "./style.css";
import Card from "../UI/Card";

export default function SideBar() {
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://pbs.twimg.com/profile_images/1084565493774598145/rlA4r7BE_400x400.jpg"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p>My name is Ivan JF I am a software developer</p>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
    </div>
  );
}
