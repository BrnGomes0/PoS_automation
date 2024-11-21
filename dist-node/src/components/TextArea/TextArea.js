import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Label from "../Label/Label";
const TextArea = ({ placeholder, value, classname, label }) => {
    return (_jsxs("div", { className: "p-1", children: [_jsx(Label, { text: label }), _jsx("textarea", { placeholder: placeholder, value: value, className: `h-[105px] w-[298px] border-[1.2px] border-gray-400 rounded-md resize-none overflow-y-auto p-2 ${classname}` })] }));
};
export default TextArea;
