import { useState, useEffect } from "react";
import axios from "axios";

import "./HomePage.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function HomePage() {
  const [forecastData, setForecastData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V`;

      try {
        const response = await axios.get(url);
        setForecastData(response.data.DailyForecasts[0]);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    const fetchCurrentWeather = async () => {
      const url = `http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V&details=true`;

      try {
        const response = await axios.get(url);
        setCurrentWeather(response.data[0]);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };

    fetchForecastData();
    fetchCurrentWeather();
  }, []);

  const today = new Date();
  const options = { month: "short", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const hourlyData = [
    { time: "16", temp: 28, icon: "sun-cloud-icon.png", humidity: "49%" },
    { time: "17", temp: 28, icon: "storm-icon.png", humidity: "66%" },
    { time: "18", temp: 28, icon: "sun-cloud-icon.png", humidity: "49%" },
    { time: "19", temp: 27, icon: "moon-cloud-icon.png", humidity: "20%" },
    { time: "20", temp: 27, icon: "moon-cloud-icon.png", humidity: "20%" },
    { time: "21", temp: 27, icon: "moon-cloud-icon.png", humidity: "20%" },
  ];

  return (
    // <Layout>
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
                      RealFeel®{" "}
                      {currentWeather.RealFeelTemperature.Metric.Value}°C
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
                <LocationMarker />
              </MapContainer>
            </div>
            <div className="radar-details">
              <p>Radar Image: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="hourly-weather-card">
            <h2>Hourly Weather</h2>
            <div className="slider-container">
              <div className="slider">
                {hourlyData.map((hour, index) => (
                  <div key={index} className="hour-item">
                    <p>{hour.time}</p>
                    <img
                      src={hour.icon}
                      alt="Weather Icon"
                      className="weather-i_con"
                    />
                    <p className="temp">{hour.temp}°C</p>
                    <p className="humidity">{hour.humidity}</p>
                  </div>
                ))}
              </div>
              <div className="slider-navigation">
                <button className="prev-slide">❮</button>
                <button className="next-slide">❯</button>
              </div>
            </div>
          </div>
          <div className="card forecast-card">
            <h2>10-Day Weather Forecast</h2>
            <ul className="forecast-list">
              <li>
                <span>24/08</span> <span>32°/25°</span> <span>Cloudy</span>{" "}
                <span>96%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
              <li>
                <span>25/08</span> <span>30°/25°</span> <span>Showers</span>{" "}
                <span>84%</span>
              </li>
            </ul>
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
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
                  UPS driver veers off road, crashes into tree due to extreme
                  heat
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    // </Layout>
  );
}

export default HomePage;
