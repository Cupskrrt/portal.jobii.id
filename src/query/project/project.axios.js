import { publicAxios } from "../axiosInstances";

export const getProject = async () => {
  return publicAxios.get("/api/project");
};

export const getProjectDetail = async (projectId) => {
  return publicAxios.get(`/api/project/${projectId}`);
};

export const updateTask = async (task) => {
  return publicAxios.patch(`/api/project/task/${task.id}`, task);
};
