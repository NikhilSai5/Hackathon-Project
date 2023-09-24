import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const stat = {
  data: {
    labels: ["Tamil Nadu", "Gujarat", "Karnataka", "Maharashtra"],
    datasets: [
      {
        label: "AVG of PM10",
        backgroundColor: "#3257a8",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#3257c9",
        hoverBorderColor: "#3257c9",
        data: [63, 62, 46, 40],
      },

      {
        label: "AVG of PM2.5",
        backgroundColor: "#37a693",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#37a693",
        hoverBorderColor: "#37a693",
        data: [32, 49, 26, 21],
      },

      {
        label: "AVG of AQI",
        backgroundColor: "#f5c96a",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#f5c96a",
        hoverBorderColor: "#f5c96a",
        data: [82.38, 69.75, 64.96, 65.23],
      },
      {
        label: "AVG of PH",
        backgroundColor: "#dc6b7f",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#dc6b7f",
        hoverBorderColor: "#dc6b7f",
        data: [7, 8, 7, 8],
      },
      {
        label: "AVG of Temp",
        backgroundColor: "#6a91c8",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#6a91c8",
        hoverBorderColor: "#6a91c8",
        data: [26, 28, 28, 27],
      },
      {
        label: "AVG of WQI",
        backgroundColor: "#8b3d88",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#8b3d88",
        hoverBorderColor: "#8b3d88",
        data: [39, 90, 71, 46],
      },
    ],
  },
};

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  type: "bar",
  //   scales: {
  //     xAxes: [{
  //         stacked: true
  //     }],
  //     yAxes: [{
  //         stacked: true
  //     }]
  // }
};

const Graph1 = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Top 5 polluted Cities</h2>
      <Bar data={stat.data} width={null} height={null} options={options} />
    </>
  );
};

export default Graph1;
