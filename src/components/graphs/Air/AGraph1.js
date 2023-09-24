import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const stat = {
  data: {
    labels: [
      "Delhi",
      "Chennai",
      "Ahmedabad",
      "Hyderabad",
      "Bengaluru",
      "Mumbai",
    ],
    datasets: [
      {
        label: "AVG of PM10",
        backgroundColor: "#3257a8",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#3257c9",
        hoverBorderColor: "#3257c9",
        data: [85, 63, 63, 62, 47, 40],
      },

      {
        label: "AVG of CO",
        backgroundColor: "#37a693",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#37a693",
        hoverBorderColor: "#37a693",
        data: [66, 62, 48, 40, 40, 33],
      },

      {
        label: "AVG of PM2.5",
        backgroundColor: "#f5c96a",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#f5c96a",
        hoverBorderColor: "#f5c96a",
        data: [53, 32, 49, 43, 26, 21],
      },
      {
        label: "AVG of OZONE",
        backgroundColor: "#8b3d88",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#8b3d88",
        hoverBorderColor: "#8b3d88",
        data: [37, 19, 5, 20, 22, 21],
      },
      {
        label: "AVG of SO2",
        backgroundColor: "#dc6b7f",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#dc6b7f",
        hoverBorderColor: "#dc6b7f",
        data: [4, 5, 4, 8, 7, 8],
      },
      {
        label: "AVG of NO2",
        backgroundColor: "#6a91c8",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#6a91c8",
        hoverBorderColor: "#6a91c8",
        data: [19, 19, 4, 10, 16, 11],
      },
      {
        label: "AVG of NH3",
        backgroundColor: "#dea5ce",

        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "#dea5ce",
        hoverBorderColor: "#dea5ce",
        data: [7, 4, 0, 2, 2, 2],
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
      <h2 style={{ textAlign: "center" }}>
        Top 6 polluted Cities Pollutants Level
      </h2>
      <Bar data={stat.data} width={2000} height={690} options={options} />
    </>
  );
};

export default Graph1;
