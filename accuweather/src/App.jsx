import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Homepage/homepage";
import HourlyWeather from "./components/Hourly/HourlyWeather";

function App() {
  return (
    <div className="main-container">
      <HomePage />
      <HourlyWeather />
    </div>
  );
}

export default App;
