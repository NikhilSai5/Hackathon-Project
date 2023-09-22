import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/Sidebar";
import SidebarW from "../sidebar/SidebarW";
import WGraph1 from "../graphs/water/WGraph1";
import { WGraph2 } from "../graphs/water/WGraph2";
import WGraph3 from "../graphs/water/WGraph3";
import WGraph4 from "../graphs/water/WGraph4";
import WGraph5 from "../graphs/water/WGraph5";

const WaterQuality = () => {
  return (
    <>
      <div className="h-screen flex flex-col non-scrollable">
        <Navbar />

        <div className="flex">
          <SidebarW />

          <div className=" overflow-y-auto graph-align">
            <div className="air-graph-col1">
              <div className="air-graph1" id="graph1">
                <WGraph2 />
              </div>
              <div className="air-graph2" id="graph2">
                <WGraph5 />
              </div>
            </div>
            <div className="air-graph-col2">
              <div className="air-graph1" id="graph3">
                <WGraph3 />
              </div>
              <div className="air-graph2 " id="graph4">
                <WGraph4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterQuality;
