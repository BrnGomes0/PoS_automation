import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../sso/MsGraphApiCalls.js";
import { loginRequest } from "../../sso/authConfig.js";
import { InteractionRequiredAuthError, InteractionStatus,} from "@azure/msal-browser";
import PopUpUser from "../PopUpUser/PopUpUser.js";

interface UserSSO {
  name?: boolean,
  image?:  boolean
}

const UserSSO: React.FC<UserSSO> = ({name, image}) => {
    
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const { instance, inProgress } = useMsal();
    const account = instance.getActiveAccount();
    const [showPopUp, setShowPopUp] = useState(false);

    const openPopUpMethod = () => {
      setShowPopUp(true)
    }

    const closePopUpMethod = () => {
      setShowPopUp(false)
    }

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
    return(
        <div className="flex gap-2 justify-center items-center">
            {name && account?.name && ( 
              <div className="font-bold">
                  <h4>{account.name}</h4>
              </div>
            )}
            {image && imageUrl && (
              <div className="w-[40px] h-[40px]">
                <button className="rounded-full" onClick={openPopUpMethod}>
                  <img src={imageUrl} alt="user_icon" className="rounded-full" />
                </button>
              </div>
            )}
            {showPopUp && (
              <PopUpUser
                closePopUp={closePopUpMethod}
                openPopUp={true}
                nameofuser={account?.name}
              />
            )}
        </div>
    );
}
export default UserSSO;