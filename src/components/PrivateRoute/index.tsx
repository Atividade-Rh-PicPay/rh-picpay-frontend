import { Navigate } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";
import { ReactNode } from "react";

function PrivateRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
