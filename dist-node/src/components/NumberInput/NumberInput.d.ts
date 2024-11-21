import React from "react";
interface InputNumberProps {
    classname?: string;
    placeholder: string;
    value?: number;
    label: string;
    method?: (value: string) => void;
    style?: React.CSSProperties;
}
declare const NumberInput: React.FC<InputNumberProps>;
export default NumberInput;
