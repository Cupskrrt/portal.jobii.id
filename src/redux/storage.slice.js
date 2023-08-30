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
      providesTags: ['Files'],
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
      invalidatesTags: ['Files'],
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
      invalidatesTags: ['Files'],
    }),
    renameItem: builder.mutation({
      query: ({ itemName, newName }) => ({
        url: `/rename/${itemName}/${newName}`,
        method: 'POST',
      }),
      invalidatesTags: ['Files'],
    }),
    moveItem: builder.mutation({
      query: ({ sourceFilename, targetDirectory}) => {
        return {
          url: `/move/${sourceFilename}/$(targetDirectory)`,
          method: 'POST',
        };
      },
      invalidatesTags: ['Files'],
    }),
  }),
});

export const {
  useGetFilesQuery,
  useUploadFilesMutation,
  useSearchFilesQuery,
  useDeleteItemMutation,
  useRenameItemMutation,
  useMoveItemMutation,
} = storageApi;
