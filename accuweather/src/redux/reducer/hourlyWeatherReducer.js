import {
  FETCH_HOURLY_WEATHER_REQUEST,
  FETCH_HOURLY_WEATHER_SUCCESS,
  FETCH_HOURLY_WEATHER_FAILURE,
} from "../actions/Action";

const initialState = {
  loading: false,
  hourlyWeatherData: [],
  error: null,
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
