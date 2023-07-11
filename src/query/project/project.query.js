import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProject, getProjectDetail, updateTask } from "./project.axios";
import { produce } from "immer";

export const useGetProjectQuery = () => {
  return useQuery(["project"], getProject);
};

export const useGetProjectDetailQuery = (projectId) => {
  return useQuery(["ProjectDetail", projectId], () =>
    getProjectDetail(projectId)
  );
};

export const useUpdateTaskMutation = () => {
  const queryclient = useQueryClient();
  return useMutation(updateTask, {
    onMutate: async (task) => {
      await queryclient.cancelQueries(["ProjectDetail", task.projectId]);

      const prevState = queryclient.getQueryData([
        "ProjectDetail",
        task.projectId,
      ]);

      const updateState = produce(prevState, (draft) => {
        const draftTasks = draft.data.tasks;
        draftTasks.map((draftTask) => {
          if (draftTask.id === task.id) {
            draftTask.status = task.status;
          }
        });
      });

      queryclient.setQueryData(["ProjectDetail", task.projectId], updateState);
      return { prevState };
    },
    onError: (err, newTask, context) => {
      queryclient.setQueryData(parent, context?.prevState);
    },
    onSettled: () => {
      queryclient.invalidateQueries(["ProjectDetail"]);
    },
  });
};
