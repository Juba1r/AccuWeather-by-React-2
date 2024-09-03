import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchHourlyWeatherRequest,
  fetchHourlyWeatherSuccess,
  fetchHourlyWeatherFailure,
  fetchForecastSuccess,
  fetchCurrentWeatherSuccess,
} from "../../redux/actions/Action";
import "./HomePage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HomePage() {
  const dispatch = useDispatch();

  const hourlyWeatherData = useSelector(
    (state) => state.weather.hourlyWeatherData
  );
  const forecastData = useSelector((state) => state.weather.forecastData);
  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const loading = useSelector((state) => state.weather.loading);

  useEffect(() => {
    const fetchHourlyWeather = async () => {
      dispatch(fetchHourlyWeatherRequest());
      try {
        const response = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/28143?apikey=${
            import.meta.env.VITE_ACCUWEATHER_API_KEY
          }`
        );
        dispatch(fetchHourlyWeatherSuccess(response.data));
      } catch (error) {
        dispatch(fetchHourlyWeatherFailure(error.message));
      }
    };

    const fetchForecastData = async () => {
      const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`;
      try {
        const response = await axios.get(url);
        dispatch(fetchForecastSuccess(response.data.DailyForecasts[0]));
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    const fetchCurrentWeather = async () => {
      const url = `http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`;
      try {
        const response = await axios.get(url);
        dispatch(fetchCurrentWeatherSuccess(response.data[0]));
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };

    fetchHourlyWeather();
    fetchForecastData();
    fetchCurrentWeather();
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
                    RealFeel® {currentWeather.Temperature.Metric.Value}
                    °C
                  </p>
                </div>
                <div className="additional-details">
                  <p>
                    RealFeel Shade™: {currentWeather.Temperature.Metric.Value}°C
                  </p>
                  <p>Wind: 5 Km/h</p>
                  <p>Wind Gusts: 7 Km/h</p>
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
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
            <p>Loading hourly weather...</p>
          ) : (
            hourlyWeatherData.map((hour, index) => (
              <div key={index} className="hourly-item">
                <p>{new Date(hour.DateTime).toLocaleTimeString()}</p>
                <p>{hour.Temperature.Value}°C</p>
                <p>{hour.IconPhrase}</p>
              </div>
            ))
          )}
        </div>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
