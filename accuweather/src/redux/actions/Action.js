export const FETCH_HOURLY_WEATHER_REQUEST = "FETCH_HOURLY_WEATHER_REQUEST";
export const FETCH_HOURLY_WEATHER_SUCCESS = "FETCH_HOURLY_WEATHER_SUCCESS";
export const FETCH_HOURLY_WEATHER_FAILURE = "FETCH_HOURLY_WEATHER_FAILURE";

export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS";

export const FETCH_DAILY_WEATHER_REQUEST = "FETCH_DAILY_WEATHER_REQUEST";
export const FETCH_DAILY_WEATHER_SUCCESS = "FETCH_DAILY_WEATHER_SUCCESS";
export const FETCH_DAILY_WEATHER_FAILURE = "FETCH_DAILY_WEATHER_FAILURE";

// Actions for hourly weather

export const fetchHourlyWeatherRequest = () => ({
  type: FETCH_HOURLY_WEATHER_REQUEST,
});

export const fetchHourlyWeatherSuccess = (data) => ({
  type: FETCH_HOURLY_WEATHER_SUCCESS,
  payload: data,
});

export const fetchHourlyWeatherFailure = (error) => ({
  type: FETCH_HOURLY_WEATHER_FAILURE,
  payload: error,
});

// Actions for forecast and current weather

export const fetchForecastSuccess = (forecastData) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: forecastData,
});

export const fetchCurrentWeatherSuccess = (currentWeather) => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  payload: currentWeather,
});

// Actions for daily weather

export const fetchDailyWeatherRequest = () => ({
  type: FETCH_DAILY_WEATHER_REQUEST,
});

export const fetchDailyWeatherSuccess = (data) => ({
  type: FETCH_DAILY_WEATHER_SUCCESS,
  payload: data,
});

export const fetchDailyWeatherFailure = (error) => ({
  type: FETCH_DAILY_WEATHER_FAILURE,
  payload: error,
});
