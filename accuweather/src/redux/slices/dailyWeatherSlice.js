import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

export const dailyWeatherApi = createApi({
  reducerPath: "dailyWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dataservice.accuweather.com/",
  }),
  endpoints: (builder) => ({
    getDailyWeather: builder.query({
      query: (locationKey = "28143") =>
        `forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`,
    }),
  }),
});

export const { useGetDailyWeatherQuery } = dailyWeatherApi;
