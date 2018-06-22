import HistoryManager from "./HistoryManager";

type FnType = (logged: boolean) => void;

class AuthManager {
  private logged = true;
  private subscriptionMap = {} as { [index: string]: FnType };
  private counter = 0;

  public login = () => {
    this.logged = true;
    HistoryManager.clearLoginUrl();
    this.onAuthChanged();
  };

  public logoff = () => {
    this.logged = false;
    this.onAuthChanged();
  };

  public getLogged = () => this.logged;

  public subscribeToLogged = (fn: FnType) => {
    const id = String(this.counter) + String(new Date().getTime());
    this.subscriptionMap[id] = fn;
    fn(this.logged);

    const deleteFn = () => {
      delete this.subscriptionMap[id];
    };

    return deleteFn;
  };

  private onAuthChanged = () => {
    const arr = Object.keys(this.subscriptionMap);
    arr.forEach(key => {
      const fn = this.subscriptionMap[key];
      if (fn) {
        fn(this.logged);
      }
    });
  };
}

export default new AuthManager();
