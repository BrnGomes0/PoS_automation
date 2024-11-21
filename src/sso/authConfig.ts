export const msalConfig = {
  
    auth: {
        clientId: "60fb1405-2498-4f01-93e3-97022fee0a42",
        authority: "https://login.microsoftonline.com/0ae51e19-07c8-4e4b-bb6d-648ee58410f4",
        redirectUri: "/use_case",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true, 
      secureCookies: true,
    },
    system: {
      allowNativeBroker: false, 
    },
  };
  export const loginRequest = {
    scopes: ["openid", "User.Read"],
  };
  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo/$value",
  };
