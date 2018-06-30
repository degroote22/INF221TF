import * as React from "react";
import { Redirect } from "react-router-dom";
import Layout from "src/components/Layout";
import { LocalLoggedQuery } from "src/config/Queries";
import {
  withLocalLogged,
  withLocalLoggedChildProps
} from "src/generated/types";
import FacebookManager from "../../singletons/FacebookManager";

class Logoff extends React.Component<withLocalLoggedChildProps> {
  public componentDidMount() {
    FacebookManager.logoff();
  }

  public render() {
    if (Boolean(this.props.data.logged)) {
      return <Layout title="Saindo da sua conta">Saindo...</Layout>;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withLocalLogged(LocalLoggedQuery)(Logoff);
