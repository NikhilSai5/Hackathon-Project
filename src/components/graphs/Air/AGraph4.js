import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function AgeDonutChart() {
  const chartContainer = useRef(null); // Reference to the chart container
  const chartInstance = useRef(null); // Reference to the chart instance

  useEffect(() => {
    // Data
    const data = {
      labels: [
        "Mumbai",
        "Indore",
        "Hyderabad",
        "Greater Noida",
        "Ahmedabad",
        "Bengaluru",
        "Chennai",
        "Delhi",
      ],
      datasets: [
        {
          data: [35, 33, 32, 31, 30, 29, 28, 27],
          backgroundColor: [
            "#f5c869",
            "#37a794",
            "#dd6b7f",
            "#8b3d88",
            "#597cf4",
            "#77c4a8",
            "#dea6cf",
            "#3257a8",
          ],
        },
      ],
    };

    // Options for the donut chart
    const options = {
      responsive: false, // Set responsive to false
      cutout: "50%", // Adjust the cutout percentage for the donut effect
      plugins: {
        legend: {
          position: "right",
        },
      },
    };

    // Check if a chart instance already exists and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the donut chart
    const ctx = chartContainer.current;
    chartInstance.current = new Chart(ctx, {
      type: "doughnut", // Use 'doughnut' type for donut chart
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Top 6 polluted Cities Ozone Level</h2>
      <canvas ref={chartContainer} width="461" height="361"></canvas>
    </div>
  );
}

export default AgeDonutChart;
