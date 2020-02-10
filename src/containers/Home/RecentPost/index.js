import React from "react";
import Card from "../../../components/UI/Card";
import "./style.css";

export default function RecentPost() {
  return (
    <div style={{ width: "70%" }}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={require(`../../../blogPostImages/memories-from.jpg`)}
            alt=""
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>posted on July 21,2016 by Sora Blogging Tips</span>
          <p>Midst first it, you're multiply divided</p>
          <button>Read More</button>
        </div>
      </Card>
    </div>
  );
}
