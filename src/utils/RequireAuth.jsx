import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  //Create logic
  const userAuth = (state) => state.persistedReducer.user.auth;
  const auth = useSelector(userAuth);

  return auth ? children : <Navigate to={"/"} replace />;
};

export default RequireAuth;
