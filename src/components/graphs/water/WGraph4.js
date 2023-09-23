import React from "react";
import Chart from "react-google-charts";

const WGraph4 = () => {
  const data = [
    ["Year", "Median of WQI"],
    ["Punjab", 7.4],
    ["Odisha", 2.9],
    ["Goa", 0.7],
    ["Pondicherry", 0.3],
    ["Gujarat", 0.2],
    ["Kerala", 0.185],
    ["Haryana", 0.186],
    ["Maharashtra", 0.046], // Corrected the spelling of Maharashtra
    ["Meghalaya", 0.024],
  ];

  const options = {
    title: "Median of WQI by state",
    hAxis: {
      title: "Year",
    },
    vAxis: {
      title: "Median of WQI",
    },
    curveType: "function",
    legend: "none",
  };

  return (
    <div className="air-graph4-img">
      <Chart
        chartType="LineChart"
        width="461px" // Set the width to 461px
        height="361px" // Set the height to 361px
        data={data}
        options={options}
      />
    </div>
  );
};

export default WGraph4;
