import "./App.css";
import AirQuality from "./components/Pages/AirQuality";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import WaterQuality from "./components/Pages/WaterQuality";
import MaxA from "./components/Pages/Air/Max";
import MinA from "./components/Pages/Air/Min";
import AvgA from "./components/Pages/Air/Avg";
import YearlyA from "./components/Pages/Air/Yearly";

import MaxW from "./components/Pages/water/Max";
import MinW from "./components/Pages/water/Min";
import AvgW from "./components/Pages/water/Avg";
import YearlyW from "./components/Pages/water/Yearly";

import Stats from "./components/Pages/Stats";
import Analysis from "./components/Pages/Analysis";
import Aboutus from "./components/Pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />

        <Route path="/analysis" element={<Analysis />} />

        <Route path="/about" element={<Aboutus />} />

        <Route path="/air-quality" element={<AirQuality />} />
        <Route path="/water-quality" element={<WaterQuality />} />
        <Route path="/air-quality/max" element={<MaxA />} />
        <Route path="/air-quality/Min" element={<MinA />} />
        <Route path="/air-quality/Avg" element={<AvgA />} />
        <Route path="/air-quality/Yearly" element={<YearlyA />} />
        <Route path="/water-quality/max" element={<MaxW />} />
        <Route path="/water-quality/Min" element={<MinW />} />
        <Route path="/water-quality/Avg" element={<AvgW />} />
        <Route path="/water-quality/Yearly" element={<YearlyW />} />
      </Routes>
    </>
  );
}

export default App;
