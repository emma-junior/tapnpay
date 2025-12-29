import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CustomLoader from "../components/ui/CustomLoader";
import ProtectedRoute from "./ProtectedRoute";

const Login = React.lazy(() => import("../features/auth/pages/Login"));
const CreateAccount = React.lazy(
  () => import("../features/auth/pages/CreateAccount")
);
const AppLayout = React.lazy(() => import("../layout/AppLayout"));
const DashboardLayout = React.lazy(() => import("../layout/DashboardLayout"));
const Home = React.lazy(() => import("../features/wallet/pages/Home"));
const History = React.lazy(() => import("../features/wallet/pages/History"));
const Cards = React.lazy(() => import("../features/wallet/pages/Cards"));
const More = React.lazy(() => import("../features/wallet/pages/More"));

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
          <Route
            path="/history"
            element={
              <SuspenseWrapper>
                <History />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/cards"
            element={
              <SuspenseWrapper>
                <Cards />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/more"
            element={
              <SuspenseWrapper>
                <More />
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
