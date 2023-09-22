import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/Sidebar";
import AGraph1 from "../graphs/Air/AGraph1";
import AGraph2 from "../graphs/Air/AGraph2";
import AGraph3 from "../graphs/Air/AGraph3";
import AGraph4 from "../graphs/Air/AGraph4";

const AirQuality = () => {
  return (
    <div className="h-screen flex flex-col non-scrollable">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className=" overflow-y-auto graph-align">
          <div className="air-graph-col1">
            <div className="air-graph1" id="graph1">
              <AGraph1 />
            </div>
            <div className="air-graph2" id="graph2">
              <AGraph2 />
            </div>
          </div>
          <div className="air-graph-col2">
            <div className="air-graph1" id="graph3">
              <AGraph3 />
            </div>
            <div className="air-graph2 " id="graph4">
              <AGraph4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
