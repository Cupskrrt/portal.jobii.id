import { axiosInstance } from "./axiosInstance";

export const getUserProfile = async () => {
  return await axiosInstance.get(`/getProfile`, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};
