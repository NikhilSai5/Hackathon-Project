import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/Sidebar";

const AirQuality = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-grow">
        <Sidebar />

        <div className="w-3/4 overflow-y-auto"></div>
      </div>
    </div>
  );
};

export default AirQuality;
