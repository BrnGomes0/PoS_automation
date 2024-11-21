import React from "react";
interface PopUpUserProps {
    closePopUp: () => void;
    openPopUp: boolean;
    nameofuser: string | undefined;
}
declare const PopUpUser: React.FC<PopUpUserProps>;
export default PopUpUser;
