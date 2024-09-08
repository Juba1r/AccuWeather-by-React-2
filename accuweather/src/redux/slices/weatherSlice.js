import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API service with RTK Query
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dataservice.accuweather.com",
  }),
  endpoints: (builder) => ({
    // Fetch current weather data 
    getCurrentWeather: builder.query({
      query: (locationKey) =>
        `/currentconditions/v1/${locationKey}?apikey=${
          import.meta.env.VITE_ACCUWEATHER_API_KEY
        }`,
    }),
    // Fetch hourly weather data
    getHourlyWeather: builder.query({
      query: (locationKey) =>
        `/forecasts/v1/hourly/12hour/${locationKey}?apikey=${
          import.meta.env.VITE_ACCUWEATHER_API_KEY
        }`,
    }),
    // Fetch forecast data
    getForecastData: builder.query({
      query: (locationKey) =>
        `/forecasts/v1/daily/1day/${locationKey}?apikey=${
          import.meta.env.VITE_ACCUWEATHER_API_KEY
        }`,
    }),
  }),
});

// Export hooks for queries
export const {
  useGetCurrentWeatherQuery,
  useGetHourlyWeatherQuery,
  useGetForecastDataQuery,
} = weatherApi;
