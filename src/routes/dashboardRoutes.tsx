import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

const LeaderBoard = lazy(() => import("../views/leader-board"));
const Dashboard = lazy(() => import("../views/dashboard"));
const Order = lazy(() => import("../views/order"));
const Messages = lazy(() => import("../views/messages"));
const Product = lazy(() => import("../views/products"));
const Setting = lazy(() => import("../views/settings"));
const SignOut = lazy(() => import("../views/signOut"));

// all dashboard related routes
export const dashboardRoutes = () => {
  return [
    {
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
