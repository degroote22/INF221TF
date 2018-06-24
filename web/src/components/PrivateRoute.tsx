import * as React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import AuthManager from "src/singletons/AuthManager";
import { CadastroGo, LoginGo } from "../utils/routes";
class PrivateRoute extends React.Component<{
  component: React.ComponentClass | React.SFC<any>;
  path: string;
}> {
  public render() {
    const { component, path, ...rest } = this.props;
    return <Route path={path} render={this.renderSafe} {...rest} />;
  }

  private renderSafe = (routeProps: RouteComponentProps<{}>) => {
    const Component = this.props.component;
    return AuthManager.getLogged() ? (
      AuthManager.getRegistered() ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={CadastroGo()} />
      )
    ) : (
      <Redirect to={LoginGo()} />
    );
  };
}

export default PrivateRoute;
