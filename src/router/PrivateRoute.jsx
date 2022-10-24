import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const location = useLocation()
  // console.log(location)
  const { pathname, search} = location;
  
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath)

  return logged ? children : <Navigate to="/login" />;
};
