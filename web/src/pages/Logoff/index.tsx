import * as React from "react";
import { Redirect } from "react-router-dom";
import { ComponentBase } from "resub";
import Layout from "src/components/Layout";
import AuthManager from "../../singletons/AuthManager";

const initialState = {
  logged: true
};
class Logoff extends ComponentBase<{}, typeof initialState> {
  public readonly state = initialState;

  public componentDidMount() {
    AuthManager.logoff();
  }

  public render() {
    if (this.state.logged) {
      return <Layout title="Saindo da sua conta">Saindo...</Layout>;
    } else {
      return <Redirect to="/" />;
    }
  }

  protected _buildState(props: {}, initial: boolean) {
    return {
      ...this.state,
      logged: AuthManager.getLogged()
    };
  }
}

export default Logoff;
