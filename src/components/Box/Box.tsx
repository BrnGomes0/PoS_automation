import React from "react";

interface BoxProps{
    classname?: string;
    children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({classname, children}) => {
    return(
        <section>
            <div className={`border-[1.6px] rounded-[20px] border-gray-400 shadow-md p-2 ${classname}`}>
                <div className="p-2 gap-2">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Box