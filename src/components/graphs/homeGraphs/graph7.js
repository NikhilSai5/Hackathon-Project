import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";

const Graph7 = () => {
  const chartContainerRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sum of temp_Avg",
        data: [
          4500, 4200, 4300, 4300, 5000, 3500, 3500, 3000, 1500, 1500, 2500,
          2500,
        ],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Sum of temp_Max",
        data: [
          3500, 3200, 3300, 3300, 4000, 3000, 3000, 2000, 1000, 1000, 2000,
          2500,
        ],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "Sum of temp_Min",
        data: [
          2500, 2200, 2300, 2300, 3000, 2000, 2000, 1500, 1500, 1000, 1500,
          2500,
        ],
        borderColor: "rgb(54, 162, 235)",
        fill: false,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <div style={{ height: "374px", width: "300px" }} ref={chartContainerRef}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Graph7;
