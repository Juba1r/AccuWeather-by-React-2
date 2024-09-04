import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunks for asynchronous actions
export const fetchHourlyWeather = createAsyncThunk(
  "weather/fetchHourlyWeather",
  async () => {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`
    );
    return response.data;
  }
);

export const fetchForecastData = createAsyncThunk(
  "weather/fetchForecastData",
  async () => {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`
    );
    return response.data.DailyForecasts[0];
  }
);

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrentWeather",
  async () => {
    const response = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`
    );
    return response.data[0];
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    hourlyWeatherData: [],
    forecastData: null,
    currentWeather: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHourlyWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHourlyWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.hourlyWeatherData = action.payload;
      })
      .addCase(fetchHourlyWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchForecastData.fulfilled, (state, action) => {
        state.forecastData = action.payload;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = action.payload;
      });
  },
});

export default weatherSlice.reducer;
