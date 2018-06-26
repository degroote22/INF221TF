import ApolloClient from "apollo-boost";
import { LogoffMutation } from "src/config/Mutations";
import { MutationResolvers } from "src/generated/types";
import FacebookManager from "../singletons/FacebookManager";
import LocalStorageManager from "../singletons/LocalStorageManager";

const sendToLoggingService = (err: any) => {
  // tslint:disable-next-line:no-console
  console.error(err);
};

const logoffResolver: MutationResolvers.LogoffResolver = () => {
  FacebookManager.logoff();
  return {
    __typename: "logoffResponse",
    ok: true
  };
};

const loginResolver: MutationResolvers.LoginResolver = () => {
  return {
    __typename: "loginResponse",
    ok: true
  };
};

const client = new ApolloClient({
  clientState: {
    defaults: {
      logged: false,
      registered: false
    },
    resolvers: {
      Mutation: {
        logoff: logoffResolver,
        login: loginResolver
      }
    }
  },
  fetchOptions: {
    credentials: "include"
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      sendToLoggingService(graphQLErrors);
    }
    if (networkError) {
      client.mutate({
        mutation: LogoffMutation
      });
    }
  },
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: LocalStorageManager.getToken()
      }
    });
  },
  uri: "http://localhost:4000"
});

export default client;
