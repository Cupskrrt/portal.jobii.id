import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile } from "../utils/api/userApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    const { data } = await getUserProfile();
    setProfile(data);
  };

  return (
    <UserContext.Provider value={{ profile, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
