import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/Sidebar";

const AirQuality = () => {
  return (
    <div className="h-screen flex flex-col non-scrollable">
      <Navbar />

      <div className="flex flex-grow">
        <Sidebar />

        <div className=" overflow-y-auto graph-align">
          <div className="air-graph-col1">
            <div className="air-graph1" id="graph1"></div>
            <div className="air-graph2" id="graph2"></div>
          </div>
          <div className="air-graph-col2">
            <div className="air-graph1" id="graph3"></div>
            <div className="air-graph2 " id="graph4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
