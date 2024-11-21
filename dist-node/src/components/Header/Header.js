import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Icons/LineBosch/LineBosch";
import BoschIcon from "../Icons/BoschIcon/BoschIcon";
import UserSSO from "../User_SSO/UserSSO.js";
const NavLinks = [
    { path: "/use_case", name: "Use Case" },
    { path: "/register_a_item", name: "Register a Item" },
    { path: "/inventory_management", name: "Inventory Management" },
    { path: "/po_management", name: "PO Management " },
];
const Header = () => {
    const [activePath, setActivePath] = useState(null);
    const navigate = useNavigate();
    const handleClick = (path, event) => {
        event.preventDefault();
        setActivePath(path);
        navigate(path);
    };
    return (_jsxs("nav", { className: "shadow-md w-full fixed h-[73px] bg-white z-20", children: [_jsx(Line, {}), _jsxs("div", { className: "flex items-center", children: [_jsx(BoschIcon, {}), _jsx("div", { className: "flex-1 flex justify-center", children: _jsx("ul", { className: "flex gap-16 list-none", children: NavLinks.map((link) => (_jsx("li", { children: _jsx("a", { href: link.path, onClick: (event) => handleClick(link.path, event), className: `relative text-black hover:text-gray-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${activePath === link.path ? 'after:w-full' : ''}`, children: link.name }) }, link.path))) }) }), _jsx("div", { className: "p-2", children: _jsx(UserSSO, { image: true }) })] })] }));
};
export default Header;
