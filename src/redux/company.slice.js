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
    createCompany: builder.query({
      query: (company) => ({
        url: "createCompany",
        method: "POST",
        body: company,
      }),
    }),
  }),
});

export const {
  useGetCompanyQuery,
  useGetApplicantQuery,
  useLazyGetSelectedApplicantQuery,
  useCreateCompanyQuery,
} = companyApi;
