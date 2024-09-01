import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./components/Daily/DailyWeather";
import HourlyWeather from "./components/Hourly/HourlyWeather";
import HomePage from "./components/Homepage/HomePage";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <div className="main-container">
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hourly" element={<HourlyWeather />} />
              <Route path="/daily" element={<DailyWeather />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
