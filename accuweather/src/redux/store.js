import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./slices/weatherSlice"; // Use named import
import { hourlyWeatherApi } from "./slices/hourlyWeatherSlice";
import { dailyWeatherApi } from "./slices/dailyWeatherSlice";

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer, // Use the named reducer from weatherApi
    [hourlyWeatherApi.reducerPath]: hourlyWeatherApi.reducer,
    [dailyWeatherApi.reducerPath]: dailyWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      weatherApi.middleware, // Add RTK Query middleware for weather API
      hourlyWeatherApi.middleware,
      dailyWeatherApi.middleware
    ),
});

export default store;
