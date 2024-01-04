import { keyConstants } from "./keyConstants";

export const handleLogout = () => {
  localStorage.removeItem(keyConstants.EXPIRY_TOKEN_TIME);
  localStorage.removeItem(keyConstants.AUTH_TOKEN);
  window.location.href = window.location.origin + "/auth/login";
};
