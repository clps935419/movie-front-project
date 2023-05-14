import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "@/store/slice/authSlice";


function RouterInterceptor({ inner }) {
  const { uid } = useSelector(selectAuth);
  const location = useLocation();
  
  if (!uid) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }
  return <>{inner}</>;
}

export default RouterInterceptor;
