import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

const Login = lazy(() => import("../views/login"));

// login , register, others
export const authenticationRoutes = () => {
  return [
    {
      path: Routes.login,
      element: <Login />,
    },

    { path: "/auth", element: <Navigate to={Routes.login} replace /> },
  ] as RouteObject[];
};
