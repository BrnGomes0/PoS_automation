import React from "react";
import { useState, useEffect } from "react";

interface PopUpWarningProps {
    image?: {
        src: string,
        alt?: string,
    },
    onClose: () => void
    content: string,
    classnameContent: string
}

const PopUpWarning: React.FC<PopUpWarningProps> = ({image, content, onClose, classnameContent}) =>{

    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowPopUp(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!showPopUp) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="p-4 bg-red-500 w-[306px] h-[300px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
            <div className="p-4 flex-col justify-center items-center text-center">
                <div className="p-2 flex justify-center items-center">
                    {image && (
                            <img src={image.src} alt={image.alt} className="w-[120px] h-[120px]"/>
                    )}
                </div>
                <p className={classnameContent}>{content}</p>
            </div>
        </div>        
       </div>
    );
}

export default PopUpWarning;