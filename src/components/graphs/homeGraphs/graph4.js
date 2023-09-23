import React from "react";
import Chart from "react-google-charts";

const Graph4 = () => {
  const data = [
    ["Category", "Average Spending (%)"],
    ["Punjab", 30.82],
    ["Meghalaya", 21.27],
    ["Kerala", 17.03],
    ["Goa", 9.75],
    ["Orissa", 7.08],
    ["Odisha", 4.08],
    ["Gujarat", 4],
    ["Maharashtra", 3.64],
    ["Pondicherry", 2.19],
  ];

  const options = {
    title: "Sum of WQI by state",
    pieHole: 0.4, // Create a donut-style pie chart
    slices: [
      { color: "#3257a8" },
      { color: "#37a693" },
      { color: "#8b3d88" },
      { color: "#dc6b7f" },
      { color: "#6a91c8" },
      { color: "#f5c96a" },
      { color: "#78c4a8" },
      { color: "#dea5ce" },
    ],
    legend: {
      textStyle: {
        fontSize: 10, // Adjust the font size for the legends
      },
    },
  };

  return (
    <div style={{ width: "290px", height: "250px" }}>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graph4;
