import { createBrowserHistory } from "history";
import { Home } from "src/utils/routes";

class HistoryManager {
  private history = createBrowserHistory();

  public getHistory = () => this.history;

  public goHome = () => this.history.push(Home);
  public goBack = () => this.history.goBack();

  public getRoute = () => this.history.location.pathname;
  public clearLoginUrl = () => {
    const newUrl = this.history.location.state.from;
    this.history.push(newUrl);
  };
}

export default new HistoryManager();
