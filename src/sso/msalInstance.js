import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

export const msalAccount = new PublicClientApplication(msalConfig);

msalAccount.initialize().then(() => {
  const accounts = msalAccount.getAllAccounts();
  console.log(accounts);
  
  if (accounts.length > 0) {
    msalAccount.setActiveAccount(accounts[0]);
  }

  msalAccount.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload;
      const account = payload.account;
      msalAccount.setActiveAccount(account);
    }
  });
});

