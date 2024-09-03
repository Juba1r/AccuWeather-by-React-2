import { combineReducers } from "redux";
import hourlyWeatherReducer from "./hourlyWeatherReducer";
import weatherReducer from "./weatherReducer";
import dailyWeatherReducer from "./dailyWeatherReducer";

const rootReducer = combineReducers({
  hourlyWeather: hourlyWeatherReducer,
  weather: weatherReducer,
  dailyWeather: dailyWeatherReducer,
});

export default rootReducer;
