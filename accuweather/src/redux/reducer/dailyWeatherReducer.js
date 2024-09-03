import {
  FETCH_DAILY_WEATHER_REQUEST,
  FETCH_DAILY_WEATHER_SUCCESS,
  FETCH_DAILY_WEATHER_FAILURE,
} from "../actions/Action";

const initialState = {
  dailyWeatherData: [],
  loading: false,
  error: null,
};

const dailyWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DAILY_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        dailyWeatherData: action.payload,
      };
    case FETCH_DAILY_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dailyWeatherReducer;
