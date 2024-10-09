import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
  name: "access_token",
  initialState: { token: null, time: null },
  reducers: {
    getToken(state, action) {
      (state.token = action.payload),
        (state.time = Date.now() + 3600 * 1000),
        localStorage.setItem("token", action.payload);
      localStorage.setItem("time", state.time);
    },
  },
});

export const { getToken } = token.actions;
export default token.reducer;
