import { jsx as _jsx } from "react/jsx-runtime";
import imgLogout from "../../assets/exit.png";
import { useLogout } from "../LogoutProvider/LogoutProvider";
const logoutButton = () => {
    const { isLoggingOut, handleLogout } = useLogout(); // Estado para controlar o logout
    return (_jsx("div", { className: "p-4", children: _jsx("button", { onClick: () => handleLogout("popup"), color: "inherit", children: _jsx("img", { src: imgLogout, className: "w-[35px] h-[30px] " }) }) }));
};
export default logoutButton;
