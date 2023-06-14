import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:6969",
});

export const axiosPrivateInstance = Axios.create({
  baseURL: "https://jobii.id:6969/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
