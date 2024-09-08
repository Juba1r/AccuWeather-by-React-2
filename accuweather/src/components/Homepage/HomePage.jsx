import "./HomePage.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  useGetCurrentWeatherQuery,
  useGetHourlyWeatherQuery,
  useGetForecastDataQuery,
} from "../../redux/slices/weatherSlice";

function HomePage() {
  const locationKey = "28143"; // Example location key

  // Fetch data using RTK Query hooks
  const { data: currentWeather, isLoading: currentWeatherLoading } =
    useGetCurrentWeatherQuery(locationKey);
  const { data: hourlyWeatherData, isLoading: hourlyWeatherLoading } =
    useGetHourlyWeatherQuery(locationKey);
  const { data: forecastData, isLoading: forecastDataLoading } =
    useGetForecastDataQuery(locationKey);

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
          {forecastDataLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>
                {forecastData?.DailyForecasts[0]?.Day?.IconPhrase}; high of{" "}
                {forecastData?.DailyForecasts[0]?.Temperature?.Maximum?.Value}°
                {forecastData?.DailyForecasts[0]?.Temperature?.Maximum?.Unit}
              </p>
              <p>
                Tonight: {forecastData?.DailyForecasts[0]?.Night?.IconPhrase};
                low of{" "}
                {forecastData?.DailyForecasts[0]?.Temperature?.Minimum?.Value}°
                {forecastData?.DailyForecasts[0]?.Temperature?.Minimum?.Unit}
              </p>
            </>
          )}
        </div>

        <div className="card current-weather">
          <h2>Current Weather</h2>
          {currentWeatherLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="time">
                {new Date(
                  currentWeather[0]?.LocalObservationDateTime
                ).toLocaleTimeString()}
              </p>
              <div className="weather-details">
                <div className="temperature">
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${String(
                      currentWeather[0]?.WeatherIcon
                    ).padStart(2, "0")}-s.png`}
                    alt="Weather icon"
                    className="weather-icon"
                  />
                  <span>{currentWeather[0]?.Temperature?.Metric?.Value}°C</span>
                  <p>
                    RealFeel®{" "}
                    {currentWeather[0]?.RealFeelTemperature?.Metric?.Value}°C
                  </p>
                </div>
                <div className="additional-details">
                  <p>
                    RealFeel Shade™:{" "}
                    {currentWeather[0]?.RealFeelTemperatureShade?.Metric?.Value}
                    °C
                  </p>
                  <p>
                    Wind: {currentWeather[0]?.Wind?.Speed?.Metric?.Value} Km/h
                  </p>
                  <p>
                    Wind Gusts:{" "}
                    {currentWeather[0]?.WindGust?.Speed?.Metric?.Value} Km/h
                  </p>
                </div>
              </div>
            </>
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
          {hourlyWeatherLoading ? (
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
          {/* List of top stories */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
