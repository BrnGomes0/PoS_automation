import React from "react";
interface TextInputProps {
    placeholder: string;
    value?: string;
    classname?: string;
    label: string;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
