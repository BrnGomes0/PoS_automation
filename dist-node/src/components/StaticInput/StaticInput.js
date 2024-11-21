import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Label from "../Label/Label";
const StaticInput = ({ classname, value, label, style }) => {
    return (_jsxs("div", { className: "p-1", children: [_jsx(Label, { text: label }), _jsx("div", { className: `w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md text-center text-gray-500 ${classname}`, style: style, children: value })] }));
};
export default StaticInput;
