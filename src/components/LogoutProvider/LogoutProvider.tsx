import { useMsal } from "@azure/msal-react";
import { useState, createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const LogoutContext = createContext<{ isLoggingOut: boolean; handleLogout: (logoutType: string) => void } | undefined>(undefined);

export const LogoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { instance } = useMsal();

  const handleLogout = async(logoutType: string) => {
    setIsLoggingOut(true);

    if (logoutType === "popup") {
      await instance.logoutPopup();
      setIsLoggingOut(false); // Finaliza o estado de logout
      navigate("/login"); // Redireciona após o logout
    }else if (logoutType === "redirect") {
        instance.logoutRedirect({
        postLogoutRedirectUri: "/login", // URL para redirecionar após logout
        });
      }
  };

  return(
    <LogoutContext.Provider value={{ isLoggingOut, handleLogout}}>
        {children}
    </LogoutContext.Provider> 
  )
}

export const useLogout = () => {
  const context = useContext(LogoutContext);
  if (!context) throw new Error("Erro ao deslogar");
  return context;
} 