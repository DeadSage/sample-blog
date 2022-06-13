import {
  Navigate,
} from "react-router-dom";


function OnlyAnonymous({ children }) {
  const token = localStorage.getItem('auth_token');
  if (token) {
    return <Navigate to="/"/>;
  }

  return children;
}


export default OnlyAnonymous;