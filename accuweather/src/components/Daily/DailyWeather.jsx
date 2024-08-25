import "./DailyWeather.css";
import Layout from "../Layout";

const DailyWeatherCard = () => {
  const hourlyWeatherData = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <Layout>
      <div className="hourly-weather-container">
        <div className="left-column">
          {hourlyWeatherData.map((hour, index) => (
            <div key={index} className="hourly-weather-card">
              <div className="hourly-weather-header">
                <div className="hour-and-icon">
                  <div className="hour">{hour}:00</div>
                  <img
                    src="/path/to/shower-icon.png"
                    alt="Showers"
                    className="weather-icon"
                  />
                  <div className="temperature">31°</div>
                </div>
                <div className="real-feel">
                  RealFeel® <span>36°</span>
                </div>
                <div className="humidity-and-dropdown">
                  <div className="humidity">52%</div>
                  <img
                    src="/path/to/dropdown-icon.png"
                    alt="Dropdown"
                    className="dropdown-icon"
                  />
                </div>
              </div>

              <div className="weather-condition">Showers</div>
              <div className="weather-details">
                <div className="details-section">
                  <div>RealFeel Shade™</div>
                  <div>34°</div>
                </div>
                <div className="details-section">
                  <div>Wind</div>
                  <div>SE 11 km/h</div>
                </div>
                <div className="details-section">
                  <div>Gusts</div>
                  <div>22 km/h</div>
                </div>
                <div className="details-section">
                  <div>Humidity</div>
                  <div>72%</div>
                </div>
                <div className="details-section">
                  <div>Indoor Humidity</div>
                  <div>72% (Extremely Humid)</div>
                </div>
                <div className="details-section">
                  <div>Dew Point</div>
                  <div>25°C</div>
                </div>
                <div className="details-section">
                  <div>Air Quality</div>
                  <div className="air-quality-value">Fair</div>
                </div>
                <div className="details-section">
                  <div>Max UV Index</div>
                  <div>3 Moderate</div>
                </div>
                <div className="details-section">
                  <div>Cloud Cover</div>
                  <div>90%</div>
                </div>
                <div className="details-section">
                  <div>Rain</div>
                  <div>0.8 mm</div>
                </div>
                <div className="details-section">
                  <div>Visibility</div>
                  <div>10 km</div>
                </div>
                <div className="details-section">
                  <div>Cloud Ceiling</div>
                  <div>500 m</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="right-column">
          <div className="card top-stories">
            <h2>Top Stories</h2>
            <ul>
              <li>
                <p>
                  2 killed, 100 evacuated as flash flooding hit parts of
                  Connecticut
                </p>
              </li>
              <li>
                <p>
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
                </p>
              </li>
              {/* Add more stories as needed */}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DailyWeatherCard;
