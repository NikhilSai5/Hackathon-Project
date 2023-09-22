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

const Home = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Home;
