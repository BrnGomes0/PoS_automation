import React from "react";

interface ButtonProps{
    text: string;
    onClick?: () => void;
    classname?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({text, onClick, classname, style}) => {
    return(
        <div className={`bg-[#245EA4] text-white w-[140px] h-[40px] text-center flex justify-center items-center font-poppinsFont rounded-lg ${classname}`}>
            <button onClick={onClick} className="w-[140px] h-[40px]" type="submit" style={style}>
                {text}
            </button>
        </div>
    )
}

export default Button