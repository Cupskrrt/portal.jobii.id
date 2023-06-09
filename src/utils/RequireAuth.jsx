import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { authenticated } = useAuth();

  return authenticated ? children : <Navigate to={"/"} replace />;
};

export default RequireAuth;
