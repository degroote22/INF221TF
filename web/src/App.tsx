import * as React from "react";
import { ApolloProvider } from "react-apollo";
import client from "src/config/ApolloClient";
import ConfiguredRouter from "src/config/ConfiguredRouter";
import FacebookManager from "./singletons/FacebookManager";

class App extends React.Component {
  public componentDidMount() {
    FacebookManager.init();
  }
  public render() {
    return (
      <ApolloProvider client={client}>
        <ConfiguredRouter />
      </ApolloProvider>
    );
  }
}

export default App;
