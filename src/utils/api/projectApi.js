import { axiosInstance } from "./axiosInstance";

export const getAllProjects = async () => {
  return axiosInstance.get("/api/project", {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const createNewProject = async (data) => {
  return axiosInstance.post("/api/project", data, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const createNewProjectItem = async ({ data, id }) => {
  return await axiosInstance.post(`/api/project/${id}/item`, data, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const updateProjectItem = async ({ data, id }) => {
  return await axiosInstance.patch(`/api/project/item/${id}`, data, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const deleteProject = async (id) => {
  return await axiosInstance.delete(`/api/project/${id}`, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const deleteProjectItem = async (id) => {
  return await axiosInstance.delete(`/api/project/item/${id}`, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};
