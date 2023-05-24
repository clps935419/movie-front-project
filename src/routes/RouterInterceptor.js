import { selectAuth } from "@/store/slice/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


function RouterInterceptor({ inner }) {
  const { uid } = useSelector(selectAuth);
  const location = useLocation();
  
  if (!uid) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }
  return <>{inner}</>;
}

export default RouterInterceptor;
