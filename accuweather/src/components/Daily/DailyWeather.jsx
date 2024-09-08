import { useGetDailyWeatherQuery } from "../../redux/slices/dailyWeatherSlice";
import "./DailyWeather.css";

const DailyWeatherCard = () => {
  const {
    data: dailyWeatherData,
    error,
    isLoading,
  } = useGetDailyWeatherQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="daily-weather-container">
      <div className="left-column">
        {dailyWeatherData?.DailyForecasts.map((day, index) => (
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherCard;
