import gql from "graphql-tag";

export const LoggedRegisteredQuery = gql`
  query LoggedRegistered {
    logged @client
    registered @client
  }
`;
