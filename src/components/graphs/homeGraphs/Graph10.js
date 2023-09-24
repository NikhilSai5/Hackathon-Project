import React from "react";

const Graph10 = () => {
  const data = [
    {
      state: "GUJARAT",
      avgAQI: 69.75,
      avgPM2_5: 49.0,
      avgPM10: 62,
      avgWQI: 242.65,
      avgPH: 7.8,
      avgTemp: 27.5,
    },
    {
      state: "KARNATAKA",
      avgAQI: 64.96,
      avgPM2_5: 25.89,
      avgPM10: 46.5,
      avgWQI: 71.33,
      avgPH: 7.25,
      avgTemp: 28.15,
    },
    {
      state: "MAHARASTRA",
      avgAQI: 65.23,
      avgPM2_5: 21.17,
      avgPM10: 39.89,
      avgWQI: 46.43,
      avgPH: 7.7,
      avgTemp: 27.3,
    },
    {
      state: "TAMILNADU",
      avgAQI: 82.38,
      avgPM2_5: 32.17,
      avgPM10: 63.21,
      avgWQI: 39.64,
      avgPH: 6.95,
      avgTemp: 26.0,
    },
    {
      state: "TOTAL",
      avgAQI: 72.2,
      avgPM2_5: 38.67,
      avgPM10: 61.77,
      avgWQI: 52.44,
      avgPH: 7.6,
      avgTemp: 27.3,
    },
  ];

  return (
    <div>
      <table className="home-table-styling">
        <thead>
          <tr>
            <th className="table-rad-r">State</th>
            <th>AVG AQI</th>
            <th>AVG PM2.5</th>
            <th>AVG PM10</th>
            <th>AVG WQI</th>
            <th>AVG PH</th>
            <th className="table-rad-l">AVG Temp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.state}</td>
              <td>{item.avgAQI}</td>
              <td>{item.avgPM2_5}</td>
              <td>{item.avgPM10}</td>
              <td>{item.avgWQI}</td>
              <td>{item.avgPH}</td>
              <td>{item.avgTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Graph10;
