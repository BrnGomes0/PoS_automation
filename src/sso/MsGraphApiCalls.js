import axios from "axios";
import { loginRequest, graphConfig } from "./authConfig";
import { msalAccount } from "../sso/msalInstance";

const callMsGraph = async () => {
    try {
        const account = msalAccount.getActiveAccount();
        if (!account) {
            throw new Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
        }

        const response = await msalAccount.acquireTokenSilent({
            ...loginRequest,
            account: account,
        });

        const headers = new Headers();
        const bearer = `Bearer ${response.accessToken}`;
        headers.append("Authorization", bearer);

        const graphMeResponse = await fetch(graphConfig.graphMeEndpoint, { headers });
        if (!graphMeResponse.ok) {
            throw new Error(`Failed to fetch data from Microsoft Graph: ${graphMeResponse.status}`);
        }
        const graphMeData = await graphMeResponse.json();

        const photoResponse = await axios.get(
            "https://graph.microsoft.com/v1.0/me/photo/$value",
            { headers: { Authorization: bearer }, responseType: "blob" }
        );

        const url = window.URL || window.webkitURL;
        const blobUrl = url.createObjectURL(photoResponse.data);

        return { graphMeData, blobUrl };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { graphMeData: null, blobUrl: null };
    }
}

export default callMsGraph