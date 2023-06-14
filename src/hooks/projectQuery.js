import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllProjects,
  createNewProject,
  deleteProject,
  createNewProjectItem,
  deleteProjectItem,
} from "../utils/api/projectApi";

export const useGetProjectQuery = (onSuccess, onError) => {
  return useQuery(["project"], getAllProjects, {
    onSuccess,
    onError,
  });
};

export const useCreateProjectQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });
};

export const useCreateProjectItemQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewProjectItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });
};

export const useDeleteProjectItemQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProjectItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });
};

export const useDeleteProjectQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });
};
