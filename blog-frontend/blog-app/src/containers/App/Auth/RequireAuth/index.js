import {
  useLocation,
  Navigate,
} from "react-router-dom";

function RequireAuth({ children }) {
  const token = localStorage.getItem('auth_token');
  let location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default RequireAuth;