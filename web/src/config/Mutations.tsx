import { gql } from "apollo-boost";

export const LogoffMutation = gql`
  mutation logoff {
    logoff @client {
      ok
    }
  }
`;

export const FbLoginMutation = gql`
  mutation login {
    login @client {
      ok
    }
  }
`;
