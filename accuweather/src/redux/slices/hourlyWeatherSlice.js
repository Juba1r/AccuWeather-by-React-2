// src/redux/slices/hourlyWeatherSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHourlyWeather = createAsyncThunk(
  "hourlyWeather/fetchHourlyWeather",
  async () => {
    const response = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/28143?apikey=${
        import.meta.env.VITE_ACCUWEATHER_API_KEY
      }`
    );
    return response.data;
  }
);

const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState: {
    hourlyWeatherData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHourlyWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHourlyWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.hourlyWeatherData = action.payload;
      })
      .addCase(fetchHourlyWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hourlyWeatherSlice.reducer;
