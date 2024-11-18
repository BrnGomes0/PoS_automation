import React from "react";
import Button from "../Button/Button";
import { useLogout } from "../LogoutProvider/LogoutProvider";

interface PopUpUserProps {
    closePopUp: () => void;
    openPopUp: boolean;
    nameofuser: string | undefined;
}

const PopUpUser: React.FC<PopUpUserProps> = ({ closePopUp, openPopUp, nameofuser }) => {

    const { isLoggingOut, handleLogout } = useLogout();

    return (
        <>
            {openPopUp && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm z-40" onClick={closePopUp}></div>
                    <div className="absolute top-full right-0 mt-2 bg-white w-[250px] h-[120px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg z-50 p-3">
                        <div className="p-4 flex flex-col justify-center items-center text-center gap-2">
                           <div> <h1 className="font-medium">Welcome, {nameofuser}</h1> </div>
                            <div>
                                <Button
                                    classname=" h-[27px] w-[64px] text-sm"
                                    text="Logout"
                                    onClick={() => handleLogout("popup")}
                                />
                            </div>
                        </div>
                        <button onClick={closePopUp} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
                    </div>
                </>
            )}
        </>
    );
};

export default PopUpUser;