import React from "react";

import Navbar from "../navbar/navbar";
import Graph1 from "../graphs/homeGraphs/graph1";
import Graph2 from "../graphs/homeGraphs/Graph2";
import Graph3 from "../graphs/homeGraphs/Graph3";
import Graph4 from "../graphs/homeGraphs/graph4";
import Graph6 from "../graphs/homeGraphs/Graph6";
import Graph7 from "../graphs/homeGraphs/graph7";
import Graph8 from "../graphs/homeGraphs/Graph8";
import Graph10 from "../graphs/homeGraphs/Graph10";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-hero">
        <div className="hero-bg"></div>
        <img src="/logo-cir.png" className="logo-align"></img>
        <h3 className="hero-text">Udyan Sathi</h3>
      </div>
      <div className="home-box-container">
        <div className="home-box" id="box1">
          <h3 className="box-heading">993</h3>
          <p className="box-subtext">Total Stations </p>
        </div>
        <div className="home-box" id="box2">
          <h3 className="box-heading">260</h3>
          <p className="box-subtext">Total Cities </p>
        </div>
        <div className="home-box" id="box3">
          <h3 className="box-heading">22</h3>
          <p className="box-subtext">Total States </p>
        </div>
        <div className="home-box" id="box4">
          <h3 className="box-heading">154</h3>
          <p className="box-subtext">AQI Greater Noida </p>
        </div>
      </div>
      <div className="home-container">
        <div className="home-col1">
          <div className="home-graph" id="home-graph1">
            <Graph7 />
          </div>
          <div className="home-graph" id="home-graph2">
            <Graph8 />
          </div>
        </div>
        <div className="home-col1">
          <div className="home-graph" id="home-graph3">
            <Graph1 />
          </div>
          <div className="home-graph" id="home-graph4">
            <Graph10 />
          </div>
        </div>
        <div className="home-col1">
          <div className="home-graph" id="home-graph5">
            <Graph4 />
          </div>
          <div className="home-graph" id="home-graph6">
            <Graph2 />
          </div>
          <div className="home-graph" id="home-graph7">
            <Graph6 />
          </div>
        </div>
      </div>
      {/* <hr className="secton-seperator"></hr> */}
      <div className="home-bottom-box-continer">
        <NavLink to={"/air-quality"}>
          <div className="bottom-box" id="bottom1">
            <div className="box-bg"></div>
            <div className="inner-box">
              <h3>Air Quality Index</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/water-quality"}>
          <div className="bottom-box" id="bottom2">
            <div className="inner-box">
              <h3>Water Quality Index</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/analysis"}>
          <div className="bottom-box" id="bottom3">
            <div className="inner-box">
              <h3>Analysis</h3>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className="bottom-box" id="bottom4">
            <div className="inner-box">
              <h3>About Us</h3>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
