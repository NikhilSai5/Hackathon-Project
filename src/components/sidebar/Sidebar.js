import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/4 h-screen sidebar-bg non-scrollable ">
        <div className="sidebar-btn-container">
          <button className="text-left sidebar-links">Max Pollutant</button>
          <hr className="sidebar-hr" />
          <button className="text-left sidebar-links">Min Pollutant</button>
          <hr className="sidebar-hr" />
          <button className="text-left sidebar-links">Average Pollutant</button>
          <hr className="sidebar-hr" />
          <button className="text-left sidebar-links">Yearly</button>
        </div>
        <div className="flex justify-center items-start h-screen">
          <div className="sidebar-highestP-box"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
