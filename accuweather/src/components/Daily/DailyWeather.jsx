import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchDailyWeatherRequest,
  fetchDailyWeatherSuccess,
  fetchDailyWeatherFailure,
} from "../../redux/actions/Action";
import "./DailyWeather.css";

const API_URL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/28143?apikey=${
  import.meta.env.VITE_ACCUWEATHER_API_KEY
}`;

const DailyWeatherCard = () => {
  const dispatch = useDispatch();
  const dailyWeatherData = useSelector(
    (state) => state.dailyWeather.dailyWeatherData
  );
  const loading = useSelector((state) => state.dailyWeather.loading);
  const error = useSelector((state) => state.dailyWeather.error);

  useEffect(() => {
    const fetchWeatherData = async () => {
      dispatch(fetchDailyWeatherRequest());
      try {
        const response = await axios.get(API_URL);
        dispatch(fetchDailyWeatherSuccess(response.data.DailyForecasts));
      } catch (err) {
        dispatch(fetchDailyWeatherFailure(err.message));
      }
    };

    fetchWeatherData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
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
                UPS driver veers off road, crashes into tree due to extreme heat
              </p>
            </li>
            <li>
              <p>
                2 killed, 100 evacuated as flash flooding hit parts of
                Connecticut
              </p>
            </li>
            {/* More stories */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherCard;
