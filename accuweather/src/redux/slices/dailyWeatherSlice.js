import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/28143?apikey=${
  import.meta.env.VITE_ACCUWEATHER_API_KEY
}`;

export const fetchDailyWeather = createAsyncThunk(
  "dailyWeather/fetchDailyWeather",
  async () => {
    const response = await axios.get(API_URL);
    return response.data.DailyForecasts;
  }
);

const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState: {
    dailyWeatherData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDailyWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDailyWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyWeatherData = action.payload;
      })
      .addCase(fetchDailyWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dailyWeatherSlice.reducer;
