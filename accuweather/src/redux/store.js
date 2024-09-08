import { configureStore } from "@reduxjs/toolkit";
import { hourlyWeatherApi } from "./slices/hourlyWeatherSlice";
import { dailyWeatherApi } from "./slices/dailyWeatherSlice";
import weatherReducer from "./slices/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [hourlyWeatherApi.reducerPath]: hourlyWeatherApi.reducer,
    [dailyWeatherApi.reducerPath]: dailyWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      hourlyWeatherApi.middleware,
      dailyWeatherApi.middleware
    ),
});

export default store;
