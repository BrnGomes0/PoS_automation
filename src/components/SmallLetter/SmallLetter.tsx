import React from "react";

interface SmallLetterProps{
    isBold: boolean;
    paragraph: string;
}

const SmallLetter: React.FC<SmallLetterProps> = ({isBold, paragraph}) => {
    return(
        <div className="p-2 justify-center ">
            <p className={`${isBold === true ? "font-bold" : "font-normal"} text-center font-poppinsFont text-sm`}>{paragraph}</p>
        </div>
    )
}


export default SmallLetter