import React from "react";
import { Bar } from "react-chartjs-2";

const Graph8 = () => {
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014"], // Add the years here
    datasets: [
      {
        label: "Variance of PH",
        data: [30689558, 2601467, 6129077, 9492515, 9678918], // Corresponding data values
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
        ticks: {
          callback: function (value, index, values) {
            // Format Y-axis labels in millions
            return value.toLocaleString(undefined, {
              maximumFractionDigits: 1,
              notation: "compact",
            });
          },
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

export default Graph8;
