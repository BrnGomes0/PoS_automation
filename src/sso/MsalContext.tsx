import React, { createContext, ReactNode, useContext, useEffect, useState} from "react";
import msalAccount from "../sso/msalInstance"
import { AccountInfo } from "@azure/msal-browser";

interface MsalContextProps { 
    accounts: any[];
}

interface MsalProviderProps { 
    children: ReactNode;
}

const MsalContext = createContext<MsalContextProps>({ accounts: []});

export const MsalProvider: React.FC<MsalProviderProps> = ({ children }) =>{
    const [accounts, setAccounts] = useState<AccountInfo[]>([]);

    useEffect(() =>{
        const AllAccounts = msalAccount.getAllAccounts();
        setAccounts(AllAccounts);
    }, []);

    return (
        <MsalContext.Provider value={{ accounts }}>
            { children }
        </MsalContext.Provider>
    );
};

//Hook para acessar o contexto em outros componentes/páginas
export const useMsal = () =>{
    return useContext(MsalContext);
}