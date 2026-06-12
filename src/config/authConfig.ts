import { Configuration, PopupRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "3ca8af3c-d789-452a-a348-028cec323a03", 
    authority: "https://login.microsoftonline.com/15e173a7-2c22-42ee-b507-de752750b566", 
    redirectUri: window.location.origin, 
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",   },
};

export const loginRequest: PopupRequest = {
  scopes: ["User.Read"],
};