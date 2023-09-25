import React from "react";

const AGraph2 = () => {
  const data = [
    { medianAQI: 483, medianPM10: 62.9, city: "Ahmedabad" },
    { medianAQI: 435, medianPM10: 46.5, city: "Bengaluru" },
    { medianAQI: 524, medianPM10: 52.62, city: "Bhopal" },
    { medianAQI: 565, medianPM10: 63.21, city: "Chennai" },
    // { medianAQI: 288, medianPM10: 84.83, city: "Delhi" },
    // { medianAQI: 435, medianPM10: 61.78, city: "Hyderabad" },
    // Missing city name, you can replace 'Unknown' with the actual city name.
  ];

  return (
    <div>
      <table className="home-table-styling">
        <thead>
          <tr>
            <th className="table-rad-r">Median AQI</th>
            <th>Median PM10</th>
            <th className="table-rad-l">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.medianAQI}</td>
              <td>{item.medianPM10}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AGraph2;
