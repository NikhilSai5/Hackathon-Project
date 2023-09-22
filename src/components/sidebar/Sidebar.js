import React from "react";
import { NavLink } from "react-router-dom";
import SidebarGraph from "../graphs/Air/SidebarGraph";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 h-screen sidebar-bg non-scrollable ">
        <div className="sidebar-btn-container">
          <NavLink className="text-left sidebar-links" to={"#"}>
            Max Pollutant
          </NavLink>
          <hr className="sidebar-hr" />
          <NavLink className="text-left sidebar-links" to={"#"}>
            Min Pollutant
          </NavLink>
          <hr className="sidebar-hr" />
          <NavLink className="text-left sidebar-links" to={"#"}>
            Average Pollutant
          </NavLink>
          <hr className="sidebar-hr" />
          <NavLink className="text-left sidebar-links" to={"#"}>
            Yearly
          </NavLink>
        </div>
        <div className="flex justify-center items-start h-screen sidebar-h">
          <div className="sidebar-highestP-box">
            <SidebarGraph />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
