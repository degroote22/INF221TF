import { createBrowserHistory } from "history";
import { Cadastro, Home, Login, UsuarioGo } from "src/utils/routes";

class HistoryManager {
  private history = createBrowserHistory();

  public getHistory = () => this.history;

  public goHome = () => this.history.push(Home);
  public goBack = () => this.history.goBack();
  public goToLogin = () => this.history.push(Login);
  public goToCadastro = () => this.history.push(Cadastro);
  public goToUser = (userId: string) => this.history.push(UsuarioGo(userId));

  public getRoute = () => this.history.location.pathname;
  public clearLoginUrl = () => {
    const oldState = this.history.location.state;
    if (!oldState) {
      this.goHome();
    } else {
      this.history.push(oldState.from);
    }
  };
}

export default new HistoryManager();
