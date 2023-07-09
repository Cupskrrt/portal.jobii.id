import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/profile",
    }),
  }),
});

export const { useGetUserQuery } = userSlice;
