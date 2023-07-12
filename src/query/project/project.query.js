import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProject,
  createTask,
  deleteProject,
  deleteTask,
  getProject,
  getProjectDetail,
  updateTask,
} from "./project.axios";
import { produce } from "immer";

export const useGetProjectQuery = () => {
  return useQuery(["project"], getProject);
};

export const useGetProjectDetailQuery = (projectId) => {
  return useQuery(["ProjectDetail", projectId], () =>
    getProjectDetail(projectId)
  );
};

export const useCreateProjectMutation = () => {
  const queryclient = useQueryClient();
  return useMutation(createProject, {
    onSuccess: async (project) => {
      await queryclient.cancelQueries(["Project"]);
      const prevProject = queryclient.getQueryData(["Project"]);
      queryclient.setQueryData(["Project"], project);

      return { prevProject };
    },
  });
};

export const useCreateTaskMutation = () => {
  const queryclient = useQueryClient();
  return useMutation(createTask, {
    onSuccess: () => {
      queryclient.invalidateQueries(["ProjectDetail"]);
    },
  });
};

export const useDeleteProjectMutation = () => {
  const queryclient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: () => {
      queryclient.invalidateQueries(["Project"]);
    },
  });
};

export const useDragTaskMutation = () => {
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

export const useUpdateTaskMutation = () => {
  const queryclient = useQueryClient();
  try {
    return useMutation(updateTask, {
      onSuccess: () => {
        queryclient.invalidateQueries(["ProjectDetail"]);
      },
    });
  } catch (err) {
    console.log({ msg: err.message });
  }
};

export const useDeleteTaskMutation = () => {
  const queryclient = useQueryClient();
  return useMutation(deleteTask, {
    onSuccess: () => {
      queryclient.invalidateQueries(["ProjectDetail"]);
    },
  });
};
