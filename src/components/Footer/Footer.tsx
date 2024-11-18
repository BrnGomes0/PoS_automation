import React from "react";
import Line from "../Icons/LineBosch/LineBosch";
import CopyrightIcon from "../Icons/CopyrightIcon/CopyrightIcon";

const Footer: React.FC = () => {
    return(
        <div className="w-full">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="flex justify-center items-center h-[70px]">
                <CopyrightIcon/>
                <h1 className="text-lg font-semibold">Developed by DTA of GS/PSC3</h1>
            </div> 
            <Line/>
        </div>
    )
}

export default Footer