import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

/** Session storage key */
const TOKEN_KEY = "token";

/** Stores the payload's token in state and session storage */
const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem(TOKEN_KEY, payload.token);
};

/** Keeps track of the JWT sent from the API */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: window.sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      window.sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  /** These `extraReducers` auto update the token
   * when the RTK Query mutations are fulfilled.
   */
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
