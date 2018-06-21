import { createBrowserHistory } from "history";
import { Home } from "src/utils/routes";

class HistoryManager {
  private history = createBrowserHistory();

  public getHistory = () => this.history;

  public goHome = () => this.history.push(Home);
}

export default new HistoryManager();
