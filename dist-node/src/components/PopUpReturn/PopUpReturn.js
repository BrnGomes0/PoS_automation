import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import TitleSmall from "../Title/Title_h3";
const PopUpOk = ({ onClose, title, imageUrl }) => {
    const [showPopUp, setShowPopUp] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);
    if (!showPopUp)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50", children: _jsx("div", { className: "p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg", children: _jsxs("div", { className: "p-4 flex-col justify-center items-center text-center", children: [_jsx("div", { className: "p-2 flex justify-center items-center", children: imageUrl && (_jsx("img", { src: imageUrl, alt: "Popup Image", className: "w-[120px] h-[120px]" })) }), _jsx("div", { className: "p-2", children: _jsx(TitleSmall, { title: title }) })] }) }) }));
};
export default PopUpOk;
