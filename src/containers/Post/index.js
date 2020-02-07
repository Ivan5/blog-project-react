import React from "react";
import "./style.css";
import BlogPost from "../../components/BlogPost";
import SideBar from "../../components/SideBar";

function Post() {
  return (
    <section className="container">
      <BlogPost></BlogPost>
      <SideBar></SideBar>
    </section>
  );
}

export default Post;
