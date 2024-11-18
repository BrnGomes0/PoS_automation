import React from "react";
import Label from "../Label/Label";

interface StaticInputProps{
    classname?: string;
    value: string;
    label: string;
    style: React.CSSProperties;
}

const StaticInput: React.FC<StaticInputProps> = ({classname, value, label, style}) => {
    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <div className={`w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md text-center text-gray-500 ${classname}`} style={style}>
                {value}
            </div>
        </div>
    )
}

export default StaticInput