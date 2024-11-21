import React from "react";
interface PopUpWarningProps {
    image?: {
        src: string;
        alt?: string;
    };
    onClose: () => void;
    content: string;
    classnameContent: string;
}
declare const PopUpWarning: React.FC<PopUpWarningProps>;
export default PopUpWarning;
