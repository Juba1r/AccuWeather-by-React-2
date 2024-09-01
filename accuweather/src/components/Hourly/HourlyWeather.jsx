import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHourlyWeather } from "../../redux/actions/Action";
import "./HourlyWeather.css";

const HourlyWeatherCard = () => {
  const dispatch = useDispatch();

  const { hourlyWeatherData, loading, error } = useSelector(
    (state) => state.hourlyWeather
  );

  useEffect(() => {
    dispatch(fetchHourlyWeather());
  }, [dispatch]);

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
                UPS driver veers off road, crashes into tree due to extreme heat
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
                UPS driver veers off road, crashes into tree due to extreme heat
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
