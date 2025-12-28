import { Navigate } from "react-router-dom";
import React from "react";
import { useAuthContext } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useAuthContext();
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
