import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobii.id:6969/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.user.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: () => ({
        url: "getCompany",
        method: "GET",
      }),
      providesTags: ["Company"],
    }),
    getLowongan: builder.query({
      query: () => ({
        url: "getLowongans",
        method: "GET",
      }),
      providesTags: ["Lowongan"],
    }),
    createLowongan: builder.mutation({
      query: (data) => ({
        url: "addLowongan",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Lowongan"],
    }),
    deleteLowongan: builder.mutation({
      query: (id) => ({
        url: `deleteLowongan/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lowongan"],
    }),
    createCompany: builder.mutation({
      query: (company) => ({
        url: "createCompany",
        method: "POST",
        body: company,
      }),
      invalidatesTags: ["Company"],
    }),
    getApplicant: builder.query({
      query: () => ({
        url: "getAllApplicant",
      }),
      providesTags: ["Applicant"],
    }),
    getSelectedApplicant: builder.query({
      query: (id) => ({
        url: `getForm/${id}`,
      }),
    }),
    deleteApplicant: builder.mutation({
      query: (id) => ({
        url: `deletePendaftar/${id}`,
      }),
    }),
  }),
});

export const {
  useGetCompanyQuery,
  useGetApplicantQuery,
  useGetLowonganQuery,
  useDeleteLowonganMutation,
  useLazyGetSelectedApplicantQuery,
  useCreateCompanyMutation,
  useCreateLowonganMutation,
  useDeleteApplicantMutation,
} = companyApi;
