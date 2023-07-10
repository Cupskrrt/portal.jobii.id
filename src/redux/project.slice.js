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
    addProjectTask: builder.mutation({
      query: ({ projectId, data }) => ({
        url: `project/${projectId}/task`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project"],
    }),
    updateProjectTask: builder.mutation({
      query: (task) => ({
        url: `project/task/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProjectTask: builder.mutation({
      query: (id) => ({
        url: `project/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useGetProjectDetailQuery,
  useAddProjectTaskMutation,
  useUpdateProjectTaskMutation,
  useDeleteProjectTaskMutation,
} = projectSlice;
