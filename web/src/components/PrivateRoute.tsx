import * as React from "react";
import { graphql } from "react-apollo";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IsRegisteredQuery } from "src/config/Queries";
import { IsRegistered } from "src/generated/types";
import HistoryManager from "src/singletons/HistoryManager";

class PrivateRoute extends React.Component<{
  component: React.ComponentClass | React.SFC<any>;
  path: string;
  exact?: boolean;
}> {
  public render() {
    const { component, path, ...rest } = this.props;
    return <Route path={path} render={this.renderSafe} {...rest} />;
  }

  private renderSafe = (routeProps: RouteComponentProps<{}>) => {
    return (
      <RenderSafe component={this.props.component} routeProps={routeProps} />
    );
  };
}

const withData = graphql<
  {
    component: React.ComponentClass | React.SFC<any>;
    routeProps: RouteComponentProps<{}>;
  },
  IsRegistered.Query,
  IsRegistered.Variables
>(IsRegisteredQuery);

const RenderSafe = withData(props => {
  const logged = Boolean(props.data && props.data.logged);
  const registered = Boolean(props.data && props.data.me && props.data.me.id);
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
