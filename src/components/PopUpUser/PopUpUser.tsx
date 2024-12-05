import React from "react";
import Button from "../Button/Button";
import { useLogout } from "../LogoutProvider/LogoutProvider";
import axios from "axios";
import { msalAccount } from "../../sso/msalInstance";

interface PopUpUserProps {
    closePopUp: () => void;
    openPopUp: boolean;
    nameofuser: string | undefined;
}

const PopUpUser: React.FC<PopUpUserProps> = ({ closePopUp, openPopUp, nameofuser }) => {
    const accounts = msalAccount.getAllAccounts()
    const { handleLogout } = useLogout();


    const deleteMapping = async () => {
        if (accounts.length > 0) {
          msalAccount.setActiveAccount(accounts[0]);
          try {
            // const response = await axios.delete('http://localhost:8081/delete', {
            const response = await axios.delete('https://mrp-back-db-render.onrender.com/delete', {
              headers: {
                Authorization: `Bearer ${accounts[0].idToken}`,
                "Content-Type": "application/json",
              },
            });
            console.log('Recurso deletado com sucesso:', response.data);
          } catch (error) {
            // if (error.response) {
              // Captura e exibe a resposta do erro da API
              console.error('Erro ao deletar material:', error);
            // } else {
              // Caso não tenha uma resposta
            //   console.error('Erro inesperado ao deletar material.');
          } finally {
            handleLogout("popup");
          }
        } else {
          console.error('Não foi possível pegar a conta');
        }
      };

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
                                    onClick={() => deleteMapping()}
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