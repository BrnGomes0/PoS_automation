import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css';
import Header from "./components/Header/Header";
import RegisterItem from "./pages/RegisterAItem/RegisterItem";
import UseCase from "./pages/UseCase/UseCase";
import Footer from "./components/Footer/Footer";
import RegisterAInforRecord from "./pages/RegisterAInforRecord/RegisterAInforRecord";
import Warenhouse from "./pages/WarenHouse/WarenHouse";
// import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import Manufacturing from "./pages/Manufacturing/Manufacturing";
import Login from "./pages/Login/Login";
import Error from "./pages/ErrorPage/Error";
import ProtectedRoute from "./sso/protectedRoute";
const App = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login" || location.pathname === "/";
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [!isLoginPage && _jsx(Header, {}), _jsx("main", { className: "flex-grow flex justify-center items-center", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register_a_item", element: _jsxs(ProtectedRoute, { children: [_jsx(RegisterItem, {}), " "] }) }), _jsx(Route, { path: "/use_case", element: _jsxs(ProtectedRoute, { children: [" ", _jsx(UseCase, {}), " "] }) }), _jsx(Route, { path: "/info_record", element: _jsxs(ProtectedRoute, { children: [" ", _jsx(RegisterAInforRecord, {}), " "] }) }), _jsx(Route, { path: "/inventory_management", element: _jsxs(ProtectedRoute, { children: [" ", _jsx(Warenhouse, {}), " "] }) }), _jsx(Route, { path: "/po_management", element: _jsxs(ProtectedRoute, { children: [" ", _jsx(Manufacturing, {}), " "] }) }), _jsx(Route, { path: "*", element: _jsx(Error, {}) })] }) }), !isLoginPage && _jsx(Footer, {})] }));
};
export default App;
