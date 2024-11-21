import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import imageBosch from "../../assets/login_bosch.png";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";
import Button from "../../components/Button/Button";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../sso/authConfig";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { instance } = useMsal();
    const { accounts, inProgress } = useMsal();
    const navigate = useNavigate();
    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup({
                ...loginRequest,
                redirectUri: "/use_case",
            });
        }
        else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest);
        }
    };
    useEffect(() => {
        if (accounts[0] && inProgress == "none") {
            navigate("/use_case");
        }
    }, [accounts, inProgress, navigate]);
    return (_jsx(_Fragment, { children: _jsx("section", { style: {
                display: 'flex',
                flexDirection: 'column',
                height: "100vh",
                width: "100%",
                backgroundImage: `url(${imageBosch})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                justifyContent: 'center',
                alignItems: 'center'
            }, children: _jsx("div", { className: "flex flex-col justify-center text-center p-4", children: _jsx("div", { className: "bg-white w-[360px] h-[280px] rounded-xl p-4 flex flex-col", children: _jsxs("div", { className: "flex flex-col justify-center items-center gap-10", children: [_jsxs("div", { className: "flex flex-col p-2", children: [_jsx(TitleBig, { title: "MRP System" }), _jsx(SubTitle, { subTitle: "Login in the Simulator" })] }), _jsxs("div", { className: "flex flex-col p-2 justify-center items-center gap-2", children: [_jsx(Button, { text: "Login", onClick: () => handleLogin("popup") }), _jsx(SubTitleBold, { subTitleBold: "*Bosch employees only. Single Sign-On required.", classname: "text-black text-[9px] w-[180px]" })] })] }) }) }) }) }));
};
export default Login;
