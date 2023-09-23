import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WGraph1 from "../graphs/water/WGraph1";

const Sidebar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [current12HourTime, setCurrent12HourTime] = useState("");

  useEffect(() => {
    // Function to update the current date and time every second
    const updateDateTime = () => {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = now.toLocaleDateString(undefined, options);
      const hours24 = now.getHours();
      const hours12 = hours24 % 12 || 12; // Convert 24-hour to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours24 >= 12 ? "PM" : "AM";
      const formattedTime = `${hours24}:${minutes}:${seconds}`;
      const formatted12HourTime = `${hours12}:${minutes}:${seconds} ${ampm}`;
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
      setCurrent12HourTime(formatted12HourTime);
    };

    // Update the date and time immediately and then every second
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="w-1/4 h-screen sidebar-bg non-scrollable ">
        <div className="sidebar-btn-container">
          <NavLink className="text-left sidebar-links" to="#">
            Yamuna River
          </NavLink>
          <hr className="sidebar-hr" />
          <NavLink className="text-left sidebar-links" to="#">
            WQI : 40.82
          </NavLink>
          <NavLink className="text-left sidebar-links" to="#">
            Water Quality : Poor
          </NavLink>
          <NavLink className="text-left sidebar-links" to="#">
            Main pollutant : BOD
          </NavLink>
          <hr className="sidebar-hr" />
          <NavLink className="text-left sidebar-links" to="#">
            {currentDateTime}
          </NavLink>
          {/* <NavLink className="text-left sidebar-links" to="#"></NavLink> */}
        </div>
        <div className="flex justify-center items-start h-screen sidebar-h">
          <div className="sidebar-highestP-box">
            <WGraph1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
