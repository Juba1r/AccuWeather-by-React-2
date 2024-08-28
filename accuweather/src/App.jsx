import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./components/Daily/DailyWeather";
import HourlyWeather from "./components/Hourly/HourlyWeather";
import HomePage from "./components/Homepage/HomePage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hourly" element={<HourlyWeather />} />
            <Route path="/daily" element={<DailyWeather />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
