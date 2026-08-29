import { Navigate } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";
import { ReactNode } from "react";

import Spinner from "./../Spinner";

function PrivateRoute({ children }: { children: ReactNode }) {
  const { accessToken, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner fullScreen />;
  }

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
