import axios from "axios";

export const fetchCompany = () => {
  return axios.get("https://jobii.id:6969/getCompany", {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const postCreateCompany = async (data) => {
  return await axios.post("https://jobii.id:6969/createCompany", data, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const postJob = async (data) => {
  return await axios.post("https://jobii.id:6969/addLowongan", data, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};
