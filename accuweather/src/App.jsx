import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./components/Daily/DailyWeather";
import HomePage from "./components/Homepage/homepage";
import HourlyWeather from "./components/Hourly/HourlyWeather";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/today" element={<HomePage />} />
          <Route path="/hourly" element={<HourlyWeather />} />
          <Route path="/daily" element={<DailyWeather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
