import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MsalProvider } from "@azure/msal-react";
import { msalAccount } from "./sso/msalInstance.js";
import { BrowserRouter } from "react-router-dom";
import { LogoutProvider } from "./components/LogoutProvider/LogoutProvider.tsx";
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(MsalProvider, { instance: msalAccount, children: _jsx(BrowserRouter, { children: _jsx(LogoutProvider, { children: _jsx(App, {}) }) }) }) }));
