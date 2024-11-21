import { jsx as _jsx } from "react/jsx-runtime";
import { useMsal } from "@azure/msal-react";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
const LogoutContext = createContext(undefined);
export const LogoutProvider = ({ children }) => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();
    const { instance } = useMsal();
    const handleLogout = async (logoutType) => {
        setIsLoggingOut(true);
        if (logoutType === "popup") {
            await instance.logoutPopup();
            setIsLoggingOut(false); // Finaliza o estado de logout
            navigate("/login"); // Redireciona após o logout
        }
        else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/login", // URL para redirecionar após logout
            });
        }
    };
    return (_jsx(LogoutContext.Provider, { value: { isLoggingOut, handleLogout }, children: children }));
};
export const useLogout = () => {
    const context = useContext(LogoutContext);
    if (!context)
        throw new Error("Erro ao deslogar");
    return context;
};
