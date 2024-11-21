import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "../Button/Button";
import { useLogout } from "../LogoutProvider/LogoutProvider";
const PopUpUser = ({ closePopUp, openPopUp, nameofuser }) => {
    const { isLoggingOut, handleLogout } = useLogout();
    return (_jsx(_Fragment, { children: openPopUp && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-40", onClick: closePopUp }), _jsxs("div", { className: "absolute top-full right-0 mt-2 bg-white w-[250px] h-[120px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg z-50 p-3", children: [_jsxs("div", { className: "p-4 flex flex-col justify-center items-center text-center gap-2", children: [_jsxs("div", { children: [" ", _jsxs("h1", { className: "font-medium", children: ["Welcome, ", nameofuser] }), " "] }), _jsx("div", { children: _jsx(Button, { classname: " h-[27px] w-[64px] text-sm", text: "Logout", onClick: () => handleLogout("popup") }) })] }), _jsx("button", { onClick: closePopUp, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700", children: "X" })] })] })) }));
};
export default PopUpUser;
