import React from "react";
import Navbar from "../navbar/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-col1">
          <div className="home-graph" id="home-graph1"></div>
          <div className="home-graph" id="home-graph2"></div>
        </div>
        <div className="home-col1">
          <div className="home-graph" id="home-graph3"></div>
          <div className="home-graph" id="home-graph4"></div>
        </div>
        <div className="home-col1">
          <div className="home-graph" id="home-graph5"></div>
          <div className="home-graph" id="home-graph6"></div>
          <div className="home-graph" id="home-graph7"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
