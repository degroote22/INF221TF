import * as React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IsRegisteredQuery } from "src/config/Queries";
import { withIsRegistered } from "src/generated/types";
import HistoryManager from "src/singletons/HistoryManager";

class PrivateRoute extends React.Component<{
  component?: React.ComponentClass | React.SFC<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  path: string;
  exact?: boolean;
}> {
  public render() {
    const { component, path, ...rest } = this.props;
    return <Route path={path} render={this.renderSafe} {...rest} />;
  }

  private renderSafe = (routeProps: RouteComponentProps<{}>) => {
    if (this.props.render) {
      const Rendered: any = this.props.render(routeProps);

      return <RenderSafe component={Rendered} routeProps={routeProps} />;
    }
    if (!this.props.component) {
      throw Error("component or render needed");
    }
    return (
      <RenderSafe component={this.props.component} routeProps={routeProps} />
    );
  };
}

const withData = withIsRegistered<{
  component: React.ComponentClass | React.SFC<any>;
  routeProps: RouteComponentProps<{}>;
}>(IsRegisteredQuery);

const RenderSafe = withData(props => {
  const logged = props.data.logged;
  const registered = Boolean(props.data.me && props.data.me.id);
  const Component = props.component;
  return logged ? (
    registered ? (
      <Component {...props.routeProps} />
    ) : (
      <Redirect to={HistoryManager.cadastroRoute()} />
    )
  ) : (
    <Redirect to={HistoryManager.loginRoute()} />
  );
});

export default PrivateRoute;
