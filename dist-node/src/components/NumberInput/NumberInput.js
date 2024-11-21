import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Label from "../Label/Label";
const NumberInput = ({ classname, placeholder, value, label, method, style }) => {
    const handleKeyDown = (event) => {
        if (["Backspace", "Delete", "ArrowUp", "ArrowDown", "Tab"].includes(event.key)) {
            return;
        }
        event.preventDefault();
    };
    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (method) {
            method(inputValue); //Chamando a função passada pelo method 
        }
    };
    return (_jsxs("div", { className: "p-1", children: [_jsx(Label, { text: label }), _jsx("input", { type: "number", placeholder: placeholder, className: `w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`, value: value, min: "0", onChange: handleChange, onKeyDown: handleKeyDown, style: style })] }));
};
export default NumberInput;
