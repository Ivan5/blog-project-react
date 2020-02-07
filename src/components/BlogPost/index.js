import React from "react";
import "./style.css";
import Card from "../UI/Card";

export default function BlogPost() {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beuatiful</h1>
          <span className="postedBy">
            posted on July 21,2016 by Sora Blogging Tips
          </span>
        </div>
        <div className="postImageContainer">
          <img src={require("../../blogPostImages/memories-from.jpg")} alt="" />
        </div>
      </Card>
    </div>
  );
}
