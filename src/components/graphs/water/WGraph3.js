import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";

const WGraph3 = () => {
  const chartContainerRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [
      "Andhra Pradesh",
      "Daman & Diu",
      "Daman, Diu, Dadra Nagar Haveli",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Odisha",
      "Orissa",
      "Pondicherry",
      "Punjab",
      "Rajasthan",
      "Tamil Nadu",
      "Tamilnadu",
      "Tripura",
    ],
    datasets: [
      {
        label: "Sum of WQI",
        data: [
          182.26, 119.26, 91.56, 122.94, 462.1, 144.85, 926.86, 105.96, 181.38,
          98.92, 390.56, 230.99, 230.35, 980.44, 495.44, 746.79, 222.76, 322.46,
          108.89, 437.87, 235.93, 205.86,
        ],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Sum of pH",
        data: [
          107.5, 84, 65, 696.5, 267.7, 126.1, 120.5, 116, 1, 939.7, 14.7,
          1088.2, 559.3, 856.8, 145.88, 78.2, 238, 154.2, 354.9, 154.6, 15.2,
          292.7, 117.6,
        ],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "Sum of Temp",
        data: [
          39.2, 30.4, 20.4, 25.8, 85.5, 90.3, 33.8, 45.3, 56.1, 45,
          34.3, 85.3, 27.4, 71.7, 20, 70.6, 55.8, 11.7, 52.6, 52.4,
          14.9, 13.3,
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
      <div style={{ height: "450px", width: "800px" }} ref={chartContainerRef}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WGraph3;
