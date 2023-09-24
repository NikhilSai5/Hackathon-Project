import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const stat = {
  data: {
    labels: [
      "Tamil Nadu",
      "Gujarat",
      "Karnataka",
      "Maharashtra"
    ],
    datasets: [
      {
        label: "Median of PM10",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [63,63,47,40]
      },

      {
        label: "Median of PM2.5",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [32,49,26,21]
      },

      {
        label: "Median of PM2.5",
        backgroundColor: "rgba(155,231,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [32,49,26,21]
      },

      {
        label: "Median of PM2.5",
        backgroundColor: "rgba(155,232,91,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [32,49,26,21]
      }
    ]
  }
}


const options = {
  responsive: true,
  legend: {
    display: false
  },
  type: "bar"
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
      <Bar
        data={stat.data}
        width={null}
        height={null}
        options={options}
      />
    </>
  );
};

export default Graph1;
