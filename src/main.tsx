import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MsalProvider } from "@azure/msal-react";
import  msalAccount  from "./sso/msalInstance";
import { BrowserRouter } from "react-router-dom";
import { LogoutProvider } from "./components/LogoutProvider/LogoutProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalAccount}>
      <BrowserRouter>
          <LogoutProvider>
              <App />
          </LogoutProvider>
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);