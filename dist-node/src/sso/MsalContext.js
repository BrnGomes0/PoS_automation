import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { msalAccount } from "../sso/msalInstance";
const MsalContext = createContext({ accounts: [] });
export const MsalProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const AllAccounts = msalAccount.getAllAccounts();
        setAccounts(AllAccounts);
    }, []);
    return (_jsx(MsalContext.Provider, { value: { accounts }, children: children }));
};
//Hook para acessar o contexto em outros componentes/páginas
export const useMsal = () => {
    return useContext(MsalContext);
};
