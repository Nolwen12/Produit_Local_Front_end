import { Navigate } from "react-router-dom";
import { getUserRole } from "./Services/auth";

const ProtectedRoute = ({ children, role }) => {
  const userRole = getUserRole();
  console.log("Token:", userRole);


if (role && !roles.includes(role)) {
  return <Navigate to="/login" />;
}
  if (!userRole) {
    return <Navigate to="/login" />;
  }
    const roles = userRole.user?.roles || []; 

  if (role && !userRole.roles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;