import React, { useEffect, useState } from "react";
import Label from "../Label/Label";
 
interface DropDownProps{
    options: string[];
    classname?: string;
    placeholder?: string;
    onSelect?: (value: string) => void;
    label: string
}
 
const DropDown: React.FC<DropDownProps> = ({label, options, placeholder, onSelect, classname}) => {
    //Para armazenar a opção selecionada  
    const [selectedOption, setSelectedOption] = useState<string>("");  
 
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
      const newValue = event.target.value;
      setSelectedOption(newValue);
      if(onSelect){
        onSelect(newValue)
      }
    };
 
    return(
        <div className="p-1">
            <Label
              text={label}
            />
            <div className={`w-auto h-[40px] p-2 border-[1.2px] border-gray-400 rounded-md text-center ${classname}`}>
              <select id="dropdown" value={selectedOption ?? ""} onChange={handleChange}>
                  <option value="" disabled>
                      {placeholder}
                  </option>
 
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                   
                  ))}
              </select>
            </div>
        </div>
    )
}
 
 
export default DropDown