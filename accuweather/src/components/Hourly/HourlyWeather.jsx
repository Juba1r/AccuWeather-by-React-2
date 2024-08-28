import { useEffect, useState } from "react";
import axios from "axios";
import "./HourlyWeather.css";


const API_URL =
  "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V";

const HourlyWeatherCard = () => {
  const [hourlyWeatherData, setHourlyWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        setHourlyWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
      <div className="hourly-weather-container">
        <div className="left-column">
          {hourlyWeatherData.map((hour, index) => (
            <div key={index} className="hourly-weather-card">
              <div className="hourly-weather-header">
                <div className="hour-and-icon">
                  <div className="hour">
                    {new Date(hour.DateTime).getHours()}:00
                  </div>
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${
                      hour.WeatherIcon < 10 ? "0" : ""
                    }${hour.WeatherIcon}-s.png`}
                    alt={hour.IconPhrase}
                    className="weather-icon"
                  />
                  <div className="temperature">
                    {Math.round(hour.Temperature.Value)}°{hour.Temperature.Unit}
                  </div>
                </div>
                <div className="real-feel">RealFeel® </div>
                <div className="humidity-and-dropdown">
                  <div className="humidity">RelativeHumidity %</div>
                </div>
              </div>

              <div className="weather-condition">{hour.IconPhrase}</div>
              <div className="weather-details">
                <div className="details-section">
                  <div>Wind</div>
                </div>
                <div className="details-section">
                  <div>Gusts</div>
                </div>
                <div className="details-section">
                  <div>Humidity</div>
                </div>
                <div className="details-section">
                  <div>UV Index</div>
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
            </ul>
          </div>
        </div>
      </div>
    
  );
};

export default HourlyWeatherCard;
