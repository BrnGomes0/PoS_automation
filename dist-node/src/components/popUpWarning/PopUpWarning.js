import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const PopUpWarning = ({ image, content, onClose, classnameContent }) => {
    const [showPopUp, setShowPopUp] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);
    if (!showPopUp)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50", children: _jsx("div", { className: "p-4 bg-red-500 w-[306px] h-[300px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg", children: _jsxs("div", { className: "p-4 flex-col justify-center items-center text-center", children: [_jsx("div", { className: "p-2 flex justify-center items-center", children: image && (_jsx("img", { src: image.src, alt: image.alt, className: "w-[120px] h-[120px]" })) }), _jsx("p", { className: classnameContent, children: content })] }) }) }));
};
export default PopUpWarning;
