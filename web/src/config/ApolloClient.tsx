import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { LogoffMutation } from "src/config/Mutations";
import introspectionQueryResultData from "src/generated/fragmentTypes.json";
import { MutationResolvers } from "src/generated/types";
import CacheManager from "../singletons/CacheManager";
import LocalStorageManager from "../singletons/LocalStorageManager";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
const cache = new InMemoryCache({ fragmentMatcher });

const sendToLoggingService = (err: any) => {
  // tslint:disable-next-line:no-console
  console.error(err);
};

const logoffResolver: MutationResolvers.LogoffResolver = () => {
  CacheManager.logoff();
  return {
    __typename: "logoffResponse",
    ok: true
  };
};

const loginResolver: MutationResolvers.LoginResolver = () => {
  CacheManager.login();
  return {
    __typename: "loginResponse",
    ok: true
  };
};

const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      logged: false
    },
    resolvers: {
      Query: {
        logged: () => LocalStorageManager.getToken() !== ""
      },
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
