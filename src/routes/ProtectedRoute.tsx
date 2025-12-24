import { Navigate } from "react-router-dom";
import React from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = null;
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
