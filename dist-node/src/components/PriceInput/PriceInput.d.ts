import React from "react";
interface PriceInputProps {
    classname?: string;
    value?: string;
    placeholder: string;
    label: string;
    onPriceChange: (value: string) => void;
}
declare const PriceInput: React.FC<PriceInputProps>;
export default PriceInput;
