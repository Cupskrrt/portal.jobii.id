import { publicAxios } from "../axiosInstances";

export const getProject = async () => {
  return publicAxios.get("/api/project");
};

export const getProjectDetail = async (projectId) => {
  return publicAxios.get(`/api/project/${projectId}`);
};

export const createProject = async (data) => {
  return publicAxios.post("/api/project", data);
};

export const createTask = async (data) => {
  return publicAxios.post(`/api/project/${data.projectId}/task`, data);
};

export const deleteProject = async (projectId) => {
  return publicAxios.delete(`/api/project/${projectId}`);
};

export const updateTask = async (task) => {
  return publicAxios.patch(`/api/project/task/${task.id}`, task);
};

export const deleteTask = async (taskId) => {
  return publicAxios.delete(`/api/project/task/${taskId}`);
};
