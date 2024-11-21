import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ text, onClick, classname, style }) => {
    return (_jsx("div", { className: `bg-[#245EA4] text-white w-[140px] h-[40px] text-center flex justify-center items-center font-poppinsFont rounded-lg ${classname}`, children: _jsx("button", { onClick: onClick, className: "w-[140px] h-[40px]", type: "submit", style: style, children: text }) }));
};
export default Button;
