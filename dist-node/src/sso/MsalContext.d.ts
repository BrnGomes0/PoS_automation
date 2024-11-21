import React, { ReactNode } from "react";
interface MsalContextProps {
    accounts: any[];
}
interface MsalProviderProps {
    children: ReactNode;
}
export declare const MsalProvider: React.FC<MsalProviderProps>;
export declare const useMsal: () => MsalContextProps;
export {};
