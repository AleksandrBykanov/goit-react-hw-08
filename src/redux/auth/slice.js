import { createSlice } from "@reduxjs/toolkit";
import { apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => builder
  .addCase(apiRegister.pending, (state) => {
    state.error = null;
  })
  .addCase(apiRegister.fulfilled, (state, action) => {
    state.isLoggedIn = true;
    state.action = action.payload.token;
    state.user = action.payload.user;
  })
  .addCase(apiRegister.rejected, (state, action) => {
    state.error = action.payload;
  })
})

export const authReducer = authSlice.reducer;