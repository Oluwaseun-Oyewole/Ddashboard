import { Navigate, createBrowserRouter } from "react-router-dom";
import { isAuthenticated, isUnAuthenticated } from "../helper";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/dashboard";
import ErrorPage from "../views/error";
import { authenticationRoutes } from "./auth.routes";
import { dashboardRoutes } from "./dashboard.routes";
import RouteProtection from "./routeProtection";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Navigate to={Routes.dashboard} replace />,
    errorElement: <ErrorPage />,
  },

  {
    path: Routes.auth,
    element: (
      <RouteProtection
        validations={[isUnAuthenticated]}
        redirect={Routes.dashboard}
      >
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },

  {
    path: "/app",
    element: (
      <RouteProtection redirect={Routes.login} validations={[isAuthenticated]}>
        <DashboardLayout />
      </RouteProtection>
    ),
    children: [...dashboardRoutes()],
  },
]);

export default routes;
