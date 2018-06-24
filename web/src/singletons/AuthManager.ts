import { autoSubscribe, AutoSubscribeStore, StoreBase } from "resub";
import HistoryManager from "./HistoryManager";

@AutoSubscribeStore
class AuthManager extends StoreBase {
  private logged = true;
  private registered = true;
  private id = "1";

  public login = () => {
    this.id = "1";
    HistoryManager.goToCadastro();
  };

  public logoff = () => {
    this.logged = false;
    this.id = "";
    this.registered = false;
    this.trigger();
  };

  @autoSubscribe
  public getLogged() {
    return this.logged;
  }

  @autoSubscribe
  public getId() {
    return this.id;
  }

  @autoSubscribe
  public getRegistered() {
    return this.registered;
  }

  public register = (course: string, year: string) => {
    this.registered = true;
    this.logged = true;
    HistoryManager.clearLoginUrl();
    this.trigger();
  };
}

export default new AuthManager();
