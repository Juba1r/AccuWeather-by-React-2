import axios from "axios";
//hourly action
export const FETCH_HOURLY_WEATHER_REQUEST = "FETCH_HOURLY_WEATHER_REQUEST";
export const FETCH_HOURLY_WEATHER_SUCCESS = "FETCH_HOURLY_WEATHER_SUCCESS";
export const FETCH_HOURLY_WEATHER_FAILURE = "FETCH_HOURLY_WEATHER_FAILURE";

export const fetchHourlyWeather = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_HOURLY_WEATHER_REQUEST });

    try {
      const response = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/28143?apikey=${
          import.meta.env.VITE_ACCUWEATHER_API_KEY
        }`
      );
      dispatch({
        type: FETCH_HOURLY_WEATHER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_HOURLY_WEATHER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// homepage action

export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS";

export const fetchForecastSuccess = (forecastData) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: forecastData,
});

export const fetchCurrentWeatherSuccess = (currentWeather) => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  payload: currentWeather,
});

export const fetchForecastData = () => async (dispatch) => {
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

export const fetchCurrentWeather = () => async (dispatch) => {
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
