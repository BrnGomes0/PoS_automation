import React from "react";
interface DropDownProps {
    options: string[];
    classname?: string;
    placeholder?: string;
    onSelect?: (value: string) => void;
    label: string;
}
declare const DropDown: React.FC<DropDownProps>;
export default DropDown;
