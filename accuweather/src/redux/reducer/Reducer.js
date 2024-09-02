//Hourly Reducer

import {
  FETCH_HOURLY_WEATHER_REQUEST,
  FETCH_HOURLY_WEATHER_SUCCESS,
  FETCH_HOURLY_WEATHER_FAILURE,
} from "../actions/Action";

const initialState = {
  loading: false,
  hourlyWeatherData: [],
  error: null,
  forecastData: null,
  currentWeather: null,
};

const hourlyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOURLY_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOURLY_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        hourlyWeatherData: action.payload,
      };
    case FETCH_HOURLY_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default hourlyWeatherReducer;

// Homepage Reducer

import {
  FETCH_FORECAST_SUCCESS,
  FETCH_CURRENT_WEATHER_SUCCESS,
} from "../actions/Action";

// const initialState1 = {
//   forecastData: null,
//   currentWeather: null,
// };
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOURLY_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecastData: action.payload,
      };
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWeather: action.payload,
      };
    default:
      return state;
  }
};
