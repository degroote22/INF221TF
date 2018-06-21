import * as React from "react";
import { Route, Router } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import MinhaConta from "src/pages/MinhaConta";
import HistoryManager from "src/singletons/HistoryManager";
import * as Routes from "src/utils/routes";
import Login from "./pages/Login";

class App extends React.Component {
  public render() {
    return (
      <Router history={HistoryManager.getHistory()}>
        <span>
          <Route path={Routes.MinhaConta} component={MinhaConta} />
          <Route path={Routes.Disciplina} component={MinhaConta} />
          <Route path={Routes.Usuario} component={MinhaConta} />
          <Route path={Routes.MinhasReacoes} component={MinhaConta} />
          <Route path={Routes.MinhasAvaliacoes} component={MinhaConta} />
          <Route path={Routes.Logoff} component={MinhaConta} />
          <Route path={Routes.Listar} component={MinhaConta} />
          <Route path={Routes.Login} component={Login} />
          <HomePage />
        </span>
      </Router>
    );
  }
}

export default App;
