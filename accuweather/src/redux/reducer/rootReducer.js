import { combineReducers } from "redux";
import hourlyWeatherReducer from "./Reducer";
import weatherReducer from "./Reducer"; 

const rootReducer = combineReducers({
  hourlyWeather: hourlyWeatherReducer,
  weather: weatherReducer,
  
});

export default rootReducer;
