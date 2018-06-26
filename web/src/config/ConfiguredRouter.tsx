import * as React from "react";
import { Route, Router } from "react-router-dom";
import PrivateRoute from "src/components/PrivateRoute";
import AvaliarDisciplina from "src/pages/AvaliarDisciplina";
import Cadastro from "src/pages/Cadastro";
import Disciplina from "src/pages/Disciplina";
import HomePage from "src/pages/HomePage";
import Login from "src/pages/Login";
import Logoff from "src/pages/Logoff";
import MinhaConta from "src/pages/MinhaConta";
import MinhasAvaliacoes from "src/pages/MinhasAvaliacoes";
import MinhasReacoes from "src/pages/MinhasReacoes";
import Usuario from "src/pages/Usuario";
import HistoryManager from "src/singletons/HistoryManager";
import * as Routes from "src/utils/routes";

class ConfiguredRouter extends React.Component {
  public render() {
    return (
      <Router history={HistoryManager.getHistory()}>
        <span>
          <Route path={Routes.Disciplina} component={Disciplina} />
          <Route path={Routes.Usuario} component={Usuario} />
          <Route path={Routes.Logoff} component={Logoff} />
          <Route path={Routes.Cadastro} component={Cadastro} />
          <Route path={Routes.Login} component={Login} />
          <PrivateRoute path={Routes.MinhaConta} component={MinhaConta} />
          <PrivateRoute path={Routes.MinhasReacoes} component={MinhasReacoes} />
          <PrivateRoute
            path={Routes.MinhasAvaliacoes}
            component={MinhasAvaliacoes}
          />
          <PrivateRoute
            exact={true}
            path={Routes.AvaliarDisciplinaNoParam}
            component={AvaliarDisciplina}
          />
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

export default ConfiguredRouter;
