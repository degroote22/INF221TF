import { createBrowserHistory } from "history";
import {
  Cadastro,
  DisciplinaGo,
  Home,
  Login,
  UsuarioGo
} from "src/utils/routes";

class HistoryManager {
  private history = createBrowserHistory();

  public getHistory = () => this.history;
  public goHome = () => this.history.push(Home);
  public goBack = () => this.history.goBack();
  public goToUser = (userId: string) => this.history.push(UsuarioGo(userId));
  public goToClass = (classId: string) =>
    this.history.push(DisciplinaGo(classId));
  public getRoute = () => this.history.location.pathname;
  public clearLoginUrl = () => {
    this.history.push(this.lastRoute());
  };
  public lastRoute = () => {
    const oldState = this.history.location.state;
    if (!oldState) {
      return Home;
    } else {
      if ((oldState.from as string).startsWith("/cadastro")) {
        return Home;
      }
      if ((oldState.from as string).startsWith("/login")) {
        return Home;
      }
      return oldState.from;
    }
  };

  public loginRoute = () => {
    const oldFrom = this.lastRoute();
    const newFrom = this.getRoute();
    if (newFrom.startsWith("/login")) {
      return {
        pathname: Login,
        state: { from: oldFrom }
      };
    }
    return {
      pathname: Login,
      state: { from: newFrom }
    };
  };

  public cadastroRoute = () => {
    const oldFrom = this.lastRoute();
    const newFrom = this.getRoute();
    if (newFrom.startsWith("/login")) {
      return {
        pathname: Cadastro,
        state: { from: oldFrom }
      };
    }
    if (newFrom.startsWith("/cadastro")) {
      return {
        pathname: Cadastro,
        state: { from: oldFrom }
      };
    }
    return {
      pathname: Cadastro,
      state: { from: newFrom }
    };
  };
}

export default new HistoryManager();
