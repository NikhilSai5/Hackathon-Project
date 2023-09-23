import React from "react";
import Chart from "react-google-charts";

const AGraph1 = () => {
  const chartData = [
    ["City", "AQI"],
    ["Delhi", 53],
    ["Chennai", 37],
    ["Ahmedabad", 32],
    ["Hyderabad", 26],
    // ["City", 22],
    ["Mumbai", 21],
    ["Bengaluru", 21],
    ["Pune", 19],
    ["Kolkata", 19],
  ];

  return (
    <div className="air-graph3-img">
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Average Air Pollution by City in India",
          hAxis: { title: "City" },
          vAxis: { title: "AQI" },
          legend: "none",
        }}
      />
    </div>
  );
};

export default AGraph1;
