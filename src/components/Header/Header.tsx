import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Line from "../Icons/LineBosch/LineBosch";
import BoschIcon from "../Icons/BoschIcon/BoschIcon";
import Logoutbutton from "../LogoutButton/LogoutButton.js"
import imgLogOut from "../../assets/exit.png"
import UserSSO from "../User_SSO/UserSSO.js";


interface NavContext {
    path: string;
    name: string;
}

const NavLinks: NavContext[] = [
    { path: "/use_case", name: "Use Case" },
    { path: "/register_a_item", name: "Register a Item" },
    { path: "/inventory_management", name: "Inventory Management" },
    {path: "/po_management", name: "PO Management " },
];

const Header: React.FC = () => {
    const [activePath, setActivePath] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleClick = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActivePath(path);
        navigate(path)
    };

    return (
        <nav className="shadow-md w-full fixed h-[73px] bg-white z-20">
            <Line />
            <div className="flex items-center">
                <BoschIcon />
                <div className="flex-1 flex justify-center">
                    <ul className="flex gap-16 list-none">
                        {NavLinks.map((link) => (
                            <li key={link.path}>
                                <a
                                    href={link.path}
                                    onClick={(event) => handleClick(link.path, event)}
                                    className={`relative text-black hover:text-gray-700 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${activePath === link.path ? 'after:w-full' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-2">
                    <UserSSO
                        image={true}
                    />
                </div>
            </div>
           
        </nav>
    );
};

export default Header;