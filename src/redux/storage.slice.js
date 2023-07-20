import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const storageApi = createApi({
  reducerPath: "storageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.user.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getFiles: builder.query({
        query: () => ({
          url: "/getDirectory",
        }),
    })
  }),
});

export const {
    useGetFilesQuery,
} = storageApi;
