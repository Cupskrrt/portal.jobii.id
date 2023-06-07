import { axiosInstance } from "./axiosInstance";

export const loginApi = async (data) => {
  return await axiosInstance.post("/Login", data);
};
