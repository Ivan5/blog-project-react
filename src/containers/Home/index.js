import React from "react";
import "./style.css";

import Card from "../../components/UI/Card";
import SideBar from "../../components/SideBar";
import RecentPost from "./RecentPost";

const Home = props => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden"
  };

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card style={{ margin: "20px 0" }}>
        <div className="galleryPost" style={{ galleryStyle }}>
          <section style={{ width: "70%" }}>
            <div className="">
              <img
                src={require(`../../blogPostImages/memories-from.jpg`)}
                alt=""
              />
            </div>
          </section>
          <section className="sideImageWrapper" style={{ width: "30%" }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={require(`../../blogPostImages/memories-from.jpg`)}
                alt=""
              />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={require(`../../blogPostImages/memories-from.jpg`)}
                alt=""
              />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img
                src={require(`../../blogPostImages/memories-from.jpg`)}
                alt=""
              />
            </div>
          </section>
        </div>
      </Card>
      <section className="HomeContainer">
        <RecentPost></RecentPost>
        <SideBar></SideBar>
      </section>
    </div>
  );
};

export default Home;
