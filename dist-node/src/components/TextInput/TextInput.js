import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Label from "../Label/Label";
const TextInput = ({ placeholder, value, classname, label }) => {
    return (_jsxs("div", { className: "p-1", children: [_jsx(Label, { text: label }), _jsx("input", { placeholder: placeholder, value: value, className: `w-[298px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}` })] }));
};
export default TextInput;
