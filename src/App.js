import "./App.css";
import AirQuality from "./components/Pages/AirQuality";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/air-quality" element={<AirQuality />} />
      </Routes>
    </>
  );
}

export default App;
