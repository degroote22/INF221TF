import client from "src/config/ApolloClient";
import { FbLoginMutation, LogoffMutation } from "src/config/Mutations";
import LocalStorageManager from "src/singletons/LocalStorageManager";
import { IAuthResponse, IKindResponse } from "src/utils/types";
import { IsRegisteredQuery, LocalLoggedQuery } from "../config/Queries";

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
        if (!(window as any).FB) {
          rs();
        }
        (FB as any).logout(rs);
      });

    await logout();
    this.unsetLogged();
  };

  private handleFBAuth = async (value: IAuthResponse | void) => {
    if (value) {
      this.setLogged(value.accessToken);
    } else {
      this.unsetLogged();
    }
  };

  private setLogged = (fbAccessToken: string) => {
    LocalStorageManager.setToken(fbAccessToken);
    if (client) {
      client.mutate({
        mutation: FbLoginMutation,
        refetchQueries: [
          { query: IsRegisteredQuery },
          { query: LocalLoggedQuery }
        ]
      });
    }
  };

  private unsetLogged = () => {
    LocalStorageManager.removeToken();
    if (client) {
      client.mutate({
        mutation: LogoffMutation,

        refetchQueries: [
          { query: IsRegisteredQuery },
          { query: LocalLoggedQuery }
        ]
      });
    }
  };
}

// curl -i -X GET \
//  "https://graph.facebook.com/v3.0/me?access_token=***"

// tslint:disable-next-line:max-classes-per-file
declare class FB {}

export default new FacebookManager();
