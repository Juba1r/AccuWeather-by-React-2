import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHourlyWeather,
  fetchForecastData,
  fetchCurrentWeather,
} from "../../redux/actions/Action";
import "./HomePage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HomePage() {
  const dispatch = useDispatch();

  const hourlyWeatherData = useSelector(
    (state) => state.hourlyWeather.hourlyWeatherData
  );
  const forecastData = useSelector((state) => state.weather.forecastData);
  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const loading = useSelector((state) => state.hourlyWeather.loading);

  useEffect(() => {
    dispatch(fetchHourlyWeather());
    dispatch(fetchForecastData());
    dispatch(fetchCurrentWeather());
  }, [dispatch]);

  const today = new Date();
  const options = { month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="homepage-container">
      <div className="left-column">
        <div className="card today-weather">
          <h2>
            TODAYS WEATHER <span className="date">{formattedDate}</span>
          </h2>
          {forecastData ? (
            <>
              <p>
                {forecastData.Day.IconPhrase}; high of{" "}
                {forecastData.Temperature.Maximum.Value}°
                {forecastData.Temperature.Maximum.Unit}
              </p>
              <p>
                Tonight: {forecastData.Night.IconPhrase}; low of{" "}
                {forecastData.Temperature.Minimum.Value}°
                {forecastData.Temperature.Minimum.Unit}
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="card current-weather">
          <h2>Current Weather</h2>
          {currentWeather ? (
            <>
              <p className="time">
                {new Date(
                  currentWeather.LocalObservationDateTime
                ).toLocaleTimeString()}
              </p>
              <div className="weather-details">
                <div className="temperature">
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${String(
                      currentWeather.WeatherIcon
                    ).padStart(2, "0")}-s.png`}
                    alt="Weather icon"
                    className="weather-icon"
                  />
                  <span>{currentWeather.Temperature.Metric.Value}°C</span>
                  <p>
                    RealFeel® {currentWeather.RealFeelTemperature.Metric.Value}
                    °C
                  </p>
                </div>
                <div className="additional-details">
                  <p>
                    RealFeel Shade™:{" "}
                    {currentWeather.RealFeelTemperatureShade.Metric.Value}°C
                  </p>
                  <p>
                    Wind: {currentWeather.Wind.Speed.Metric.Value}{" "}
                    {currentWeather.Wind.Speed.Metric.Unit}
                  </p>
                  <p>
                    Wind Gusts: {currentWeather.WindGust.Speed.Metric.Value}{" "}
                    {currentWeather.WindGust.Speed.Metric.Unit}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="card weather-radar">
          <h2>Weather Radar</h2>
          <div className="radar-container">
            <MapContainer
              center={{ lat: 51.505, lng: -0.09 }}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>You are here</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="radar-details">
            <p>Radar Image: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="hourly-weather-card">
          <h2>Hourly Weather</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="slider-container">
              <div className="slider">
                {hourlyWeatherData &&
                  hourlyWeatherData.map((hour, index) => (
                    <div key={index} className="hour-item">
                      <p>{hour.DateTime.substring(11, 16)}</p>
                      <img
                        src={`https://developer.accuweather.com/sites/default/files/${String(
                          hour.WeatherIcon
                        ).padStart(2, "0")}-s.png`}
                        alt="Weather Icon"
                        className="weather-icon"
                      />
                      <p className="temp">{hour.Temperature.Value}°C</p>
                      <p className="humidity">{hour.RelativeHumidity}%</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="card forecast-card">
          <h2>10-Day Weather Forecast</h2>
          <ul className="forecast-list">
            {/* Mock data to be replaced with real API data */}
            <li>
              <span>24/08</span> <span>32°/25°</span> <span>Cloudy</span>{" "}
              <span>96%</span>
            </li>
            <li>
              <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
              <span>84%</span>
            </li>
            {/* Add more items */}
          </ul>
        </div>
      </div>

      <div className="right-column">
        <div className="card top-stories">
          <h2>Top Stories</h2>
          <ul className="top-stories-list">
            <li>
              <p>
                2 killed, 100 evacuated as flash flooding hit parts of
                Connecticut
              </p>
            </li>
            {/* Add more stories */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
