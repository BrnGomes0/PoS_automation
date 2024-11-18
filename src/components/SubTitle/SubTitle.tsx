import React from "react";

interface SubTitleProps{
    subTitle: string;
    classname?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({subTitle, classname}) => {
    return(
        <div>
            <h3 className={`font-poppinsFont text-sm text-[#80868B] font-medium ${classname}`}>{subTitle}</h3>
        </div>
    )
}

export default SubTitle