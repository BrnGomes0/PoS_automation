import React from "react";

interface TitleSmallProps{
    title: string;
    style?: React.CSSProperties;
    classname?: string;
}

const TitleSmall: React.FC<TitleSmallProps> = ({ title, style, classname }) =>{
    return(
        <div>
            <h3 className={`p-1 font-poppinsFont font-semibold text-xl ${classname}`} style={style}>{title}</h3>
        </div>
    )
}

export default TitleSmall