import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../sso/MsGraphApiCalls.js";
import { loginRequest } from "../../sso/authConfig.js";
import { InteractionRequiredAuthError, InteractionStatus, } from "@azure/msal-browser";
import PopUpUser from "../PopUpUser/PopUpUser.js";
const UserSSO = ({ name, image }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const { instance, inProgress } = useMsal();
    const account = instance.getActiveAccount();
    const [showPopUp, setShowPopUp] = useState(false);
    const openPopUpMethod = () => {
        setShowPopUp(true);
    };
    const closePopUpMethod = () => {
        setShowPopUp(false);
    };
    useEffect(() => {
        if (!imageUrl && inProgress === InteractionStatus.None) {
            callMsGraph()
                .then((response) => {
                setImageUrl(response?.blobUrl);
                setLoading(false);
            })
                .catch((e) => {
                if (e instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect({
                        ...loginRequest,
                        account: instance.getActiveAccount(),
                    });
                }
            });
        }
    }, [inProgress, instance, imageUrl, account?.name]);
    return (_jsxs("div", { className: "flex gap-2 justify-center items-center", children: [name && account?.name && (_jsx("div", { className: "font-bold", children: _jsx("h4", { children: account.name }) })), image && imageUrl && (_jsx("div", { className: "w-[40px] h-[40px]", children: _jsx("button", { className: "rounded-full", onClick: openPopUpMethod, children: _jsx("img", { src: imageUrl, alt: "user_icon", className: "rounded-full" }) }) })), showPopUp && (_jsx(PopUpUser, { closePopUp: closePopUpMethod, openPopUp: true, nameofuser: account?.name }))] }));
};
export default UserSSO;
