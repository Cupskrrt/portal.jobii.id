import { axiosInstance } from "./axiosInstance";

export const loginApi = async (data) => {
  return await axiosInstance.post("/Login", data, { withCredentials: true });
};

export const refreshToken = async () => {
  return await axiosInstance.post("/refreshToken", null, {
    withCredentials: true,
  });
};
