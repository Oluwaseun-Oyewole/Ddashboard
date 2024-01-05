import Customer from "../assets/svg/totalCustomer.svg";
import Order from "../assets/svg/totalOrder.svg";
import Product from "../assets/svg/totalProduct.svg";
import Sales from "../assets/svg/totalSales.svg";

export const keyConstants = {
  EXPIRY_TOKEN_TIME: "auth_expiry",
  EXPIRE_AUTH_TOKEN_TIME: "expire-auth-token",
  AUTH_TOKEN: "auth_key",
  DEFAULT_PAGE_SIZE: 10,
};

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  dashboard: "Dashboard",
  leaderBoard: "LeaderBoard",
  order: "Order",
  products: "Products",
  settings: "Settings",
  sales: "Sales Report",
  messages: "Messages",
  signOut: "signOut",
};

export const DashboardCard = [
  {
    id: 1,
    title: "Total Sales",
    amount: "$1K",
    percentage: "+8% from yesterday",
    image: Sales,
  },
  {
    id: 2,
    title: "Order",
    amount: "$512",
    percentage: "+5% from yesterday",
    image: Order,
  },
  {
    id: 3,
    title: "Product Sold",
    amount: "$5",
    percentage: "+1,2% from yesterday",
    image: Product,
  },
  {
    id: 4,
    title: "New Customer",
    amount: "$8",
    percentage: "+1,2% from yesterday",
    image: Customer,
  },
];

export const Products = [
  {
    index: "#",
    title: "Name",
    popularity: "Popularity",
    sales: "Sales",
  },

  {
    index: "01",
    title: "Home Decor Range",
    popularity: "75%",
    sales: "45%",
  },

  {
    index: "02",
    title: "Disney Princess Pink Bag 18",
    popularity: "65%",
    sales: "29%",
  },

  {
    index: "03",
    title: "Bathroom Essentials",
    popularity: "55%",
    sales: "18%",
  },

  {
    index: "04",
    title: "Apple Smartwatches",
    popularity: "30%",
    sales: "25%",
  },
];
