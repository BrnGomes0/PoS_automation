import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TitleBig from "../../components/Title/Title_h1";
import TitleSmall from "../../components/Title/Title_h3";
import image404 from "../../assets/404.png";
const Error = () => {
    return (_jsxs("section", { style: {
            display: 'flex',
            flexDirection: 'column',
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${image404})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            justifyContent: 'center',
            alignItems: 'center'
        }, children: [_jsx("div", {}), _jsxs("div", { className: "flex flex-col justify-center text-center ", children: [_jsx(TitleBig, { title: "404", classname: "text-9xl text-white" }), _jsx(TitleSmall, { title: "Page not found!!", classname: "text-white" })] })] }));
};
export default Error;
