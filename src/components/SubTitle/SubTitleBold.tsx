import React from "react";

interface SubTitleBoldProps{
    subTitleBold: string;
    style?: React.CSSProperties;
    classname?: string;
}

const SubTitleBold: React.FC<SubTitleBoldProps> = ({subTitleBold, style, classname}) => {
    return(
        <div>
            <h3 className={`font-poppinsFont text-sm text-[#80868B] font-semibold ${classname}`}style={style}>{subTitleBold}</h3>
        </div>
    )
}

export default SubTitleBold