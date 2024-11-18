import React from "react";
import { useEffect, useState} from "react";
import TitleSmall from "../Title/Title_h3";

interface PopUpProps{
    onClose?: () => void
    title: string
    imageUrl?: string;
}

const PopUpOk: React.FC<PopUpProps> = ({onClose, title, imageUrl}) =>{
    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() =>{
            setShowPopUp(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, [onClose]);

    
    if(!showPopUp) return null;

    return(
       <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
            <div className="p-4 flex-col justify-center items-center text-center">
                <div className="p-2 flex justify-center items-center">
                    {imageUrl && (
                            <img src={imageUrl} alt="Popup Image" className="w-[120px] h-[120px]"/>
                    )}
                </div>

                <div className="p-2">   
                        <TitleSmall
                        title={title}
                        />
                </div>
            </div>
        </div>        
       </div>
    )
}

export default PopUpOk;