import * as React from "react";
import { graphql } from "react-apollo";
import { Redirect } from "react-router-dom";
import Layout from "src/components/Layout";
import { LocalLoggedQuery } from "src/config/Queries";
import { LocalLogged } from "src/generated/types";
import FacebookManager from "../../singletons/FacebookManager";

class Logoff extends React.Component<{ logged: boolean }> {
  public componentDidMount() {
    FacebookManager.logoff();
  }

  public render() {
    if (this.props.logged) {
      return <Layout title="Saindo da sua conta">Saindo...</Layout>;
    } else {
      return <Redirect to="/" />;
    }
  }
}

const withData = graphql<{}, LocalLogged.Query, LocalLogged.Variables>(
  LocalLoggedQuery
);

export default withData(props => (
  <Logoff logged={Boolean(props.data && props.data.logged)} />
));
