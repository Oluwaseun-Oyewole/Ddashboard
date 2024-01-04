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
