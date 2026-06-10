import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const role = localStorage.getItem("role");

  if (role === "admin") {
    return children;
  }

  return <h2>Access Denied. Admin Only</h2>;
}

export default AdminRoute;