import * as React from "react";
import { Redirect } from "react-router-dom";
import Layout from "src/components/Layout";
import AuthManager from "src/singletons/AuthManager";

const initialState = {
  logged: true
};

class Logoff extends React.Component<{}, typeof initialState> {
  public readonly state = initialState;
  private unsubscribeToLogged!: (() => void | undefined);

  public componentDidMount() {
    const cb = (logged: boolean) => this.setState({ logged });
    this.unsubscribeToLogged = AuthManager.subscribeToLogged(cb);
    AuthManager.logoff();
  }

  public componentWillUnmount() {
    if (this.unsubscribeToLogged) {
      this.unsubscribeToLogged();
    }
  }

  public render() {
    if (this.state.logged) {
      return <Layout title="Saindo da sua conta">Saindo...</Layout>;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Logoff;
