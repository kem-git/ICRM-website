import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/authConfig.ts"; // Path to your newly created config
import App from "./App.tsx";
import "./index.css";

// Initialize MSAL instance outside of the component lifecycle
// This prevents it from re-instantiating every time your app re-renders
const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </HelmetProvider>
);