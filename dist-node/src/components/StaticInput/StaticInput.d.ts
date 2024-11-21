import React from "react";
interface StaticInputProps {
    classname?: string;
    value: string;
    label: string;
    style?: React.CSSProperties;
}
declare const StaticInput: React.FC<StaticInputProps>;
export default StaticInput;
