import React from "react";
import Label from "../Label/Label";

interface TextAreaProps {
    placeholder: string;
    value?: string;
    classname?: string;
    label: string;
}


const TextArea: React.FC<TextAreaProps> = ({placeholder, value, classname, label}) => {
    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <textarea
            placeholder={placeholder}
            value={value}
            className={`h-[105px] w-[298px] border-[1.2px] border-gray-400 rounded-md resize-none overflow-y-auto p-2 ${classname}`}
        />
        </div>
    )
}

export default TextArea