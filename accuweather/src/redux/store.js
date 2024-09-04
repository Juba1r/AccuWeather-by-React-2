import { configureStore } from "@reduxjs/toolkit";
import hourlyWeatherReducer from "./slices/hourlyWeatherSlice";
import weatherReducer from "./slices/weatherSlice";
import dailyWeatherReducer from "./slices/dailyWeatherSlice";

const store = configureStore({
  reducer: {
    hourlyWeather: hourlyWeatherReducer,
    weather: weatherReducer,
    dailyWeather: dailyWeatherReducer,
  },
});

export default store;
