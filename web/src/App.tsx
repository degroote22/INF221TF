import * as React from "react";
import { Route, Router } from "react-router-dom";
import Disciplina from "src/pages/Disciplina";
import HomePage from "src/pages/HomePage";
import Logoff from "src/pages/Logoff";
import MinhaConta from "src/pages/MinhaConta";
import MinhasAvaliacoes from "src/pages/MinhasAvaliacoes";
import MinhasReacoes from "src/pages/MinhasReacoes";
import HistoryManager from "src/singletons/HistoryManager";
import * as Routes from "src/utils/routes";
import PrivateRoute from "./components/PrivateRoute";
import AvaliarDisciplina from "./pages/AvaliarDisciplina";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Usuario from "./pages/Usuario";

class App extends React.Component {
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

export default App;
