import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jobii.id:6969/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.user.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getProject: builder.query({
      query: () => "project",
      providesTags: ["Project"],
    }),
    createProject: builder.mutation({
      query: (project) => ({
        url: "project",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `project/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
    getProjectDetail: builder.query({
      query: (projectId) => `project/${projectId}`,
      providesTags: (result) => [{ type: "Project", id: result.id }],
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: `project/${task.projectId}/task`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: (task) => [{ type: "Project", id: task.projectId }],
    }),
    dragTask: builder.mutation({
      query: (task) => ({
        url: `project/task/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          projectApi.util.updateQueryData(
            "getProjectDetail",
            task.projectId,
            (draft) => {
              const draftTasks = draft.tasks;
              draftTasks.map((draftTask) => {
                if (draftTask.id === task.id) {
                  Object.assign(draftTask, task);
                }
              });
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `project/task/${task.id}`,
        method: "PATCH",
        body: task,
      }),
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          projectApi.util.updateQueryData(
            "getProjectDetail",
            task.projectId,
            (draft) => {
              const draftTasks = draft.tasks;
              draftTasks.map((draftTask) => {
                if (draftTask.id === task.id) {
                  Object.assign(draftTask, task);
                }
              });
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (task) => ({
        url: `project/task/${task.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (task) => [{ type: "Project", id: task.projectId }],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectDetailQuery,
  useCreateTaskMutation,
  useDragTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = projectApi;
