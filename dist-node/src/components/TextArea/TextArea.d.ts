import React from "react";
interface TextAreaProps {
    placeholder: string;
    value?: string;
    classname?: string;
    label: string;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
