import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const privateQuery = fetchBaseQuery({
  baseUrl: "https://jobii.id:6969/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().persistedReducer.user.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  },
});

// TODO: continue interceptor
