import {
  FETCH_HOURLY_WEATHER_REQUEST,
  FETCH_HOURLY_WEATHER_SUCCESS,
  FETCH_HOURLY_WEATHER_FAILURE,
  FETCH_FORECAST_SUCCESS,
  FETCH_CURRENT_WEATHER_SUCCESS,
} from "../actions/Action";

const initialState = {
  forecastData: null,
  currentWeather: null,
  hourlyWeatherData: [],
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOURLY_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOURLY_WEATHER_SUCCESS:
      return {
        ...state,
        hourlyWeatherData: action.payload,
        loading: false,
      };
    case FETCH_HOURLY_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        forecastData: action.payload,
      };
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
