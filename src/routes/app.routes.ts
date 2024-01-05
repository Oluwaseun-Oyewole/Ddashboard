import { ReactNode } from "react";
import LeaderBoard from "../assets/svg/leaderboard.svg";
import Messages from "../assets/svg/message.svg";
// import Order from "../assets/svg/orders.svg";
// import Product from "../assets/svg/product.svg";
// import SalesReport from "../assets/svg/sales.svg";
import Setting from "../assets/svg/settings.svg";
import SignOut from "../assets/svg/signOut.svg";
import { Routes } from "./routes";

export interface AppRoutesType {
  id: number;
  path: string;
  name: string;
  icon: ReactNode;
}
[];

export const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.dashboard,
    name: "Dashboard",
    icon: LeaderBoard,
  },
  // {
  //   id: 2,
  //   path: Routes.leaderBoard,
  //   name: "LeaderBoard",
  //   icon: LeaderBoard,
  // },

  // {
  //   id: 3,
  //   path: Routes.order,
  //   name: "Orders",
  //   icon: Order,
  // },
  // {
  //   id: 4,
  //   path: Routes.products,
  //   name: "Products",
  //   icon: Product,
  // },

  // {
  //   id: 5,
  //   path: Routes.saleReport,
  //   name: "Sales Report",
  //   icon: SalesReport,
  // },

  {
    id: 6,
    path: Routes.messages,
    name: "Messages",
    icon: Messages,
  },
  {
    id: 7,
    path: Routes.settings,
    name: "Settings",
    icon: Setting,
  },
  {
    id: 8,
    path: Routes.signOut,
    name: "Sign Out",
    icon: SignOut,
  },
];
