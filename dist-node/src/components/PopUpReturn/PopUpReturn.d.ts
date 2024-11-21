import React from "react";
interface PopUpProps {
    onClose?: () => void;
    title: string;
    imageUrl?: string;
}
declare const PopUpOk: React.FC<PopUpProps>;
export default PopUpOk;
