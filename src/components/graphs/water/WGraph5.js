import React from "react";
import { Bar } from "react-chartjs-2";

const WGraph5 = () => {
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014"], // Add the years here
    datasets: [
      {
        label: "Variance of PH",
        data: [0.1, 0.4, 0.3, 1.2, 0.6], // Corresponding data values
        backgroundColor: "#262a76",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Year", // X-axis label
        },
        ticks: {
          autoSkip: false, // Prevent automatic skipping of labels
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Variance of PH", // Y-axis label
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartStyles = {
    width: "310px",
    marginTop: "25px",
  };

  return (
    <div style={chartStyles}>
      <Bar data={data} options={options} width={600} height={600} />
    </div>
  );
};

export default WGraph5;
