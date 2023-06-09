import { createContext, useContext, useState } from "react";
import { loginApi } from "../utils/api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const login = async (credential) => {
    const { data } = await loginApi(credential);
    window.sessionStorage.setItem("token", data.token);
    setAuthenticated(true);
  };

  const logout = () => {
    window.sessionStorage.clear();
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
