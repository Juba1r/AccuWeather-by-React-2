import axios from "axios";

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
