import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CustomLoader from "../components/ui/CustomLoader";
import Login from "../features/auth/pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../features/wallet/pages/Home";
import AppLayout from "../layout/AppLayout";
import CreateAccount from "../features/auth/pages/CreateAccount";

type Props = {
  children: React.ReactNode;
};

export function SuspenseWrapper({ children }: Props) {
  return (
    <React.Suspense fallback={<CustomLoader />}>{children}</React.Suspense>
  );
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Home />
              </SuspenseWrapper>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
