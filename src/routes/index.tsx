import { Navigate, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import ErrorPage from "../views/error";
import { dashboardRoutes } from "./dashboard.routes";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.dashboard} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <DashboardLayout />,
    children: [...dashboardRoutes()],
  },
]);

export default routes;
