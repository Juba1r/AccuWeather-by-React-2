import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

export const hourlyWeatherApi = createApi({
  reducerPath: "hourlyWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dataservice.accuweather.com/",
  }),
  endpoints: (builder) => ({
    getHourlyWeather: builder.query({
      query: (locationKey = "28143") =>
        `forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}`,
    }),
  }),
});

export const { useGetHourlyWeatherQuery } = hourlyWeatherApi;
