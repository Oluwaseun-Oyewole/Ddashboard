import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

export const LeaderBoard = lazy(() => import("../views/leaderboard"));
export const Dashboard = lazy(() => import("../views/dashboard"));
export const Order = lazy(() => import("../views/order"));
export const Messages = lazy(() => import("../views/messages"));
export const Product = lazy(() => import("../views/products"));
export const Setting = lazy(() => import("../views/settings"));
export const SignOut = lazy(() => import("../views/signOut"));
export const SalesReport = lazy(() => import("../views/salesReport"));

// all dashboard related routes

export const dashboardRoutes = () => {
  return [
    {
      id: 1,
      path: Routes.leaderBoard,
      element: <LeaderBoard />,
    },
    {
      path: Routes.dashboard,
      element: <Dashboard />,
    },
    {
      path: Routes.order,
      element: <Order />,
    },
    {
      path: Routes.messages,
      element: <Messages />,
    },
    { path: Routes.saleReport, element: <SalesReport /> },
    {
      path: Routes.products,
      element: <Product />,
    },
    {
      path: Routes.settings,
      element: <Setting />,
    },

    {
      path: Routes.signOut,
      element: <SignOut />,
    },

    { path: "/app", element: <Navigate to={Routes.dashboard} replace /> },
  ] as RouteObject[];
};
