import React from "react";
interface ButtonProps {
    text: string;
    onClick?: () => void;
    classname?: string;
    style?: React.CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
