import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectSlice = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["ProjectApi"],
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => "project",
      providesTags: (result = [], error, arg) => [
        "Project",
        ...result.map(({ id }) => ({ type: "Projects", id })),
      ],
    }),
    getProjectDetail: builder.query({
      query: (projectId) => `project/${projectId}`,
      providesTags: () => [{ type: "Project" }],
    }),
    updateProjectTask: builder.mutation({
      query: (task) => ({
        url: `project/task/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useGetProjectDetailQuery,
  useUpdateProjectTaskMutation,
} = projectSlice;
