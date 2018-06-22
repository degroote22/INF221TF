import * as React from "react";
import { Route, Router } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import Logoff from "src/pages/Logoff";
import MinhaConta from "src/pages/MinhaConta";
import HistoryManager from "src/singletons/HistoryManager";
import * as Routes from "src/utils/routes";
import PrivateRoute from "./components/PrivateRoute";
import AvaliarDisciplina from "./pages/AvaliarDisciplina";
import Login from "./pages/Login";

class App extends React.Component {
  public render() {
    return (
      <Router history={HistoryManager.getHistory()}>
        <span>
          <Route path={Routes.Disciplina} component={MinhaConta} />
          <Route path={Routes.Usuario} component={MinhaConta} />
          <Route path={Routes.Listar} component={MinhaConta} />
          <Route path={Routes.Logoff} component={Logoff} />
          <Route path={Routes.Login} component={Login} />
          <PrivateRoute path={Routes.MinhaConta} component={MinhaConta} />
          <PrivateRoute path={Routes.MinhasReacoes} component={MinhaConta} />
          <PrivateRoute path={Routes.MinhasAvaliacoes} component={MinhaConta} />
          <PrivateRoute
            path={Routes.AvaliarDisciplina}
            component={AvaliarDisciplina}
          />
          <HomePage />
        </span>
      </Router>
    );
  }
}

export default App;
