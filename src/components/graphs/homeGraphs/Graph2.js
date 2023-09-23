import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function AgePieChart() {
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

    // Options for the pie chart
    const options = {
      responsive: false, // Set responsive to false
      plugins: {
        legend: {
          position: "right",
          labels: {
            font: {
              size: 10, // Adjust the font size of the legends
            },
          },
        },
      },
    };

    // Check if a chart instance already exists and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the pie chart
    const ctx = chartContainer.current;
    chartInstance.current = new Chart(ctx, {
      type: "pie", // Use 'pie' type for pie chart
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <canvas ref={chartContainer} width="290" height="250"></canvas>
    </div>
  );
}

export default AgePieChart;
