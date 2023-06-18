import axios from "axios";

export const fetchCompany = () => {
  return axios.get("https://jobii.id:6969/getCompany");
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

export const getAllApplicant = async () => {
  return await axios.get("https://jobii.id:6969/getAllApplicant", {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const getApplicantById = async (id) => {
  return await axios.get(`https://jobii.id:6969/getForm/${id}`, {
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
    },
  });
};
