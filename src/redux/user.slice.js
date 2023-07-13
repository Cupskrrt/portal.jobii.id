import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, token: null, auth: false },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuth: (state) => {
      state.auth = true;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.auth = false;
    },
  },
});
export const { setToken, setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
