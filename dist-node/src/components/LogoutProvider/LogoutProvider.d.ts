import { ReactNode } from "react";
export declare const LogoutProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useLogout: () => {
    isLoggingOut: boolean;
    handleLogout: (logoutType: string) => void;
};
