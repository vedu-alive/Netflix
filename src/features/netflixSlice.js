import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import requests from "../Requests";

const initialState = {
  movies: [],
  genres: [],
  genresLoaded: false,
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const request = await axios.get(requests.getGenres);
  console.log(request.data);
});

const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
  },
});

export default netflixSlice.reducer;
