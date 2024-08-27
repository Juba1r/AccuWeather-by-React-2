import { useEffect, useState } from "react";
import "./DailyWeather.css";
import Layout from "../Layout";

const API_URL =
  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/28143?apikey=PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V";

const DailyWeatherCard = () => {
  const [dailyWeatherData, setDailyWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setDailyWeatherData(data.DailyForecasts);
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
    <Layout>
      <div className="daily-weather-container">
        <div className="left-column">
          {dailyWeatherData.map((day, index) => (
            <div key={index} className="daily-weather-card">
              <div className="daily-weather-header">
                <div className="daily-weather-date">
                  <span>
                    {new Date(day.Date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                  <span>{new Date(day.Date).toLocaleDateString("en-GB")}</span>
                </div>
                <div className="daily-weather-icon">
                  <img
                    src={`https://developer.accuweather.com/sites/default/files/${
                      day.Day.Icon < 10 ? "0" : ""
                    }${day.Day.Icon}-s.png`}
                    alt={day.Day.IconPhrase}
                  />
                </div>

                <div className="daily-weather-humidity">
                  <span>{day.Day.RainProbability}%</span>
                </div>
              </div>
              <div className="daily-weather-description">
                {day.Day.LongPhrase}
              </div>
              <div className="daily-weather-details">
                <div className="daily-weather-detail-item">
                  <span>
                    RealFeel<sup>®</sup>
                  </span>
                </div>
                <div className="daily-weather-detail-item">
                  <span>Max UV Index</span>
                </div>
                <div className="daily-weather-detail-item">
                  <span>
                    RealFeel Shade<sup>™</sup>
                  </span>
                </div>
                <div className="daily-weather-detail-item">
                  <span>Wind</span>
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
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DailyWeatherCard;
