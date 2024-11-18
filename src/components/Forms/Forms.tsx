import React, { ReactNode } from "react"

interface FormsProps{
    children: ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}



const Forms: React.FC<FormsProps> = ({children, onSubmit}) => {
    return(
        <div>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}

export default Forms