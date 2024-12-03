import React, { useEffect } from "react";
//LocalHost
import imageBosch from "../../../public/assets/login_bosch.png"
//Vercel
// import imageBosch from "../../assets/login_bosch.png"
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";
import Button from "../../components/Button/Button";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../sso/authConfig";
import { useNavigate } from "react-router-dom" 


const Login: React.FC = () => {
    const { instance } = useMsal();
    const { accounts, inProgress} = useMsal();
    const navigate = useNavigate();
    type LoginType = "popup" | "redirect";

    const handleLogin = (loginType: LoginType) => {
        if (loginType === "popup"){
            instance.loginPopup({
                ...loginRequest,
            });
            navigate("/use_case")
        } else if (loginType === "redirect"){
            instance.loginRedirect(loginRequest);
        }
    };

    useEffect(() =>{
        if(accounts[0] && inProgress == "none"){
            navigate("/use_case");
        }
    }, [accounts, inProgress, navigate])

    return(
        <>
            <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: "100vh",
                width: "100%",
                backgroundImage: `url(${imageBosch})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div className="flex flex-col justify-center text-center p-4">
                <div className="bg-white w-[360px] h-[280px] rounded-xl p-4 flex flex-col">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="flex flex-col p-2">
                            <TitleBig
                                title="PoS Simulator"
                            />
                            <SubTitle
                                subTitle="MRP System"
                            />
                        </div>
                        <div className="flex flex-col p-2 justify-center items-center gap-2">
                            <Button
                                text="Login"
                                onClick={() => handleLogin("popup")}
                            />
                            <SubTitleBold
                                subTitleBold="*Bosch employees only. Single Sign-On required."
                                classname="text-black text-[9px] w-[180px]"
                            />   
                        </div>
                    </div>
                </div>
            </div>

            </section>
        </>
    )
}

export default Login