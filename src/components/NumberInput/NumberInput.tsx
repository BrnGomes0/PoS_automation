import React from "react";
import Label from "../Label/Label";

interface InputNumberProps{
    classname?: string;
    placeholder: string;
    value?: number | string;
    label: string;
    method?: (value: string) => void; // Atualizado para ser uma função de callback
    style?: React.CSSProperties
}

const NumberInput: React.FC<InputNumberProps> = ({classname, placeholder, value, label, method, style}) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (["Backspace", "Delete", "ArrowUp", "ArrowDown", "Tab"].includes(event.key)) {
            return;
        }
        event.preventDefault();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (method) {
            method(inputValue); //Chamando a função passada pelo method 
        }
    }

    
    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <input
                type="number"
                placeholder={placeholder}
                className={`w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`}
                value={value}
                min="0"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                style={style}
            />
        </div>
    )
}


export default NumberInput

