import axios from "axios";
import useSWR from "swr";

const fetchCompany = () => {
  return axios.get("https://jobii.id:6969/getCompany", {
    headers: {
      Authorization: `${window.sessionStorage.getItem("token")}`,
    },
  });
};

export const getCompany = () => {
  const { data, error, isLoading } = useSWR(`/api/company`, fetchCompany);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
