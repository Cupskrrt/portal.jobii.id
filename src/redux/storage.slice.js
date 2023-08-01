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
    }),
    uploadFiles: builder.mutation({
      query: (files) => {
        let formData = new FormData();
        files.forEach((file, index) => {
          formData.append(`file${index + 1}`, file);
        });
        return {
          url: "/upload",
          method: "POST",
          body: formData,
        };
      },
    }),
    searchFiles: builder.query({
      query: (keywords) => ({
        url: `/search?keyword=${keywords}`,
      }),
    }),
    deleteItem: builder.mutation({
      query: (itemName) => ({
        url:`/delete/${itemName}`,
        method: 'DELETE',
      }),
    }),
    renameItem: builder.mutation({
      query: ({ itemName, newName }) => ({
        url: `/rename/${itemName}/${newName}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetFilesQuery,
  useUploadFilesMutation,
  useSearchFilesQuery,
  useDeleteItemMutation,
  useRenameItemMutation,
} = storageApi;
