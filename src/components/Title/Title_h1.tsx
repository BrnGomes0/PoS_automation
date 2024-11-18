import React from "react";

interface TitleBigProps{
    title: string;
    style?: React.CSSProperties;
    classname?: string;
}

const TitleBig: React.FC<TitleBigProps> = ({ title, style, classname }) =>{
    return(
        <div>
            <h1 className={`p-1 font-poppinsFont font-semibold text-3xl ${classname}`} style={style}>{title}</h1>
        </div>
    )
}

export default TitleBig