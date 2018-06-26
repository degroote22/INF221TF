import client from "src/config/ApolloClient";
import { FbLoginMutation, LogoffMutation } from "src/config/Mutations";
import CacheManager from "src/singletons/CacheManager";
import LocalStorageManager from "src/singletons/LocalStorageManager";
import { IAuthResponse, IKindResponse } from "src/utils/types";

class FacebookManager {
  public init(debug: boolean = false) {
    (window as any).fbAsyncInit = () => {
      (FB as any).init({
        appId: "193675244675446",
        cookie: true,
        xfbml: true,
        version: "v3.0"
      });
      (FB as any).AppEvents.logPageView();
      this.getLoginStatus().then(this.handleFBAuth);
    };

    const init = (d: any, s: any, id: any) => {
      const fjs = d.getElementsByTagName(s)[0];
      let js: any;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    };

    init(document, "script", "facebook-jssdk");
  }

  public getLoginStatus = (): Promise<IAuthResponse | void> => {
    return new Promise((rs, rj) => {
      (FB as any).getLoginStatus((response: IKindResponse) => {
        if (response.status === "unknown") {
          rj();
        } else {
          if (response.status === "connected") {
            rs(response.authResponse);
          } else {
            rs();
          }
        }
      });
    });
  };

  public login = () => {
    ((window as any).FB as any).login((response: IKindResponse) => {
      const promise: Promise<IAuthResponse | void> = new Promise((rs, rj) => {
        if (response.status === "unknown") {
          rj();
        } else {
          if (response.status === "connected") {
            rs(response.authResponse);
          } else {
            rs();
          }
        }
      });

      promise.then(this.handleFBAuth);
    });
  };

  public logoff = async () => {
    const logout = (): Promise<{ name: string }> =>
      new Promise((rs, rj) => {
        (FB as any).logout("/me", rs);
      });

    await logout();
    this.unsetLogged();
  };

  private handleFBAuth = async (value: IAuthResponse | void) => {
    const getData = (): Promise<{ name: string }> =>
      new Promise((rs, rj) => {
        (FB as any).api("/me", rs);
      });
    const { name } = await getData();
    if (value) {
      this.setLogged(value.accessToken, value.userID, name);
    } else {
      this.unsetLogged();
    }
  };

  private setLogged = (
    fbAccessToken: string,
    fbUserId: string,
    fbUserName: string
  ) => {
    LocalStorageManager.setToken(fbAccessToken);
    LocalStorageManager.setUid(fbUserId);
    LocalStorageManager.setUsername(fbUserName);
    CacheManager.setLogged(fbAccessToken, fbUserId, fbUserName);
    if (client) {
      client.mutate({ mutation: FbLoginMutation });
    }
  };

  private unsetLogged = () => {
    LocalStorageManager.removeToken();
    LocalStorageManager.removeUid();
    LocalStorageManager.removeUsername();
    CacheManager.unsetLogged();
    if (client) {
      client.mutate({ mutation: LogoffMutation });
    }
  };
}

// tslint:disable-next-line:max-classes-per-file
declare class FB {}

export default new FacebookManager();
