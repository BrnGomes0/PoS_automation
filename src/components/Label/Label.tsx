import React from "react";

interface LabelProps{
    text: string;
    classname?: string;
}

const Label: React.FC<LabelProps> = ({text, classname}) => {
    return(
        <div>
           <label className={`p-1 font-poppinsFont font-medium text-[14px] ${classname}`}>{text}:</label>
        </div>
    )
}

export default Label