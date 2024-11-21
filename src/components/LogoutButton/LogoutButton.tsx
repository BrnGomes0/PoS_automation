import React from "react";
import imgLogout from "../../assets/exit.png"
import { useLogout } from "../LogoutProvider/LogoutProvider"

const logoutButton: React.FC = () => {
  const { handleLogout } = useLogout(); // Estado para controlar o logout

  return (
    <div className="p-4">
      <button onClick={() => handleLogout("popup")} color="inherit">
        <img src={imgLogout} className="w-[35px] h-[30px] " />
      </button>
    </div>
  );
};

export default logoutButton