import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },

    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFailure, fetchSuccess } = videoSlice.actions;

export default videoSlice.reducer;
