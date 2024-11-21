import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Label from "../Label/Label";
const DropDown = ({ label, options, placeholder, onSelect, classname }) => {
    //Para armazenar a opção selecionada  
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedOption(newValue);
        if (onSelect) {
            onSelect(newValue);
        }
    };
    return (_jsxs("div", { className: "p-1", children: [_jsx(Label, { text: label }), _jsx("div", { className: `w-auto h-[40px] p-2 border-[1.2px] border-gray-400 rounded-md text-center ${classname}`, children: _jsxs("select", { id: "dropdown", value: selectedOption ?? "", onChange: handleChange, children: [_jsx("option", { value: "", disabled: true, children: placeholder }), options.map((option) => (_jsx("option", { value: option, children: option }, option)))] }) })] }));
};
export default DropDown;
