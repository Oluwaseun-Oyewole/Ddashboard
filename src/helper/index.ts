import { keyConstants } from "./keyConstants";
import CryptoJS from "crypto-js";

export const isAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsValid = expireTime > now && !!token;
  return sessionIsValid;
};

export const isUnAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsInvalid = expireTime <= now || !token;
  return sessionIsInvalid;
};
export const encrypt = (secret: string, value: string) => {
  return CryptoJS.AES.encrypt(value, secret).toString();
};

export const handleLogout = () => {
  localStorage.removeItem(keyConstants.EXPIRY_TOKEN_TIME);
  localStorage.removeItem(keyConstants.AUTH_TOKEN);
  window.location.href = window.location.origin + "/auth/login";
};
