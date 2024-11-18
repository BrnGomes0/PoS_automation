import React from "react";
import Label from "../Label/Label";

interface TextInputProps{
    placeholder: string;
    value?: string;
    classname?: string;
    label: string
}

const TextInput: React.FC<TextInputProps> = ({placeholder, value, classname, label}) => {
    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <input
                placeholder={placeholder}
                value={value}
                className={`w-[298px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`}
            >
            </input>
        </div>
    )
}


export default TextInput