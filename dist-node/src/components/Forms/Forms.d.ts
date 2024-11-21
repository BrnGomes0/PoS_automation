import React, { ReactNode } from "react";
interface FormsProps {
    children: ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
declare const Forms: React.FC<FormsProps>;
export default Forms;
