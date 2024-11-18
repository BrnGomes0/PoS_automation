import React, { useState } from "react";
import Label from "../Label/Label";

interface PriceInputProps{
    classname?: string;
    value?: string;
    placeholder: string;
    label: string;
    onPriceChange: (value: string) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({classname, value, placeholder, label, onPriceChange}) => {
    const [price, setPrice] = useState<string>("0,00")

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        const maxValue = 999999

        if(parseInt(numericValue) > maxValue) return;

        const formattedValue = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(parseFloat(numericValue) / 100);

        //Continuar daqui, e do RegisterAInfoRecord, o que está acontecendo é que, aqui estava criado como String, e na API é como int, então tem que ser 
        //number ou algo assim, por isso já mudei o const price lá em cima, mas não sei se é o certo, o certo é tirar do string, tem que perguntar
        const newPrice = formattedValue.replace("R$", "").trim();
        setPrice(newPrice);

        //Passando o valor atualizado para o componente
        onPriceChange(newPrice)

    }

    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <input
                type="text"
                placeholder={placeholder}
                className={`w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`}
                value={`R$ ${price}`}
                onChange={handlePriceChange}
            />
        </div>
    )
}

export default PriceInput