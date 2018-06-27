import gql from "graphql-tag";

export const LocalLoggedQuery = gql`
  query LocalLogged {
    logged @client
  }
`;

export const IsRegisteredQuery = gql`
  query IsRegistered {
    logged @client
    me {
      id
    }
  }
`;

export const ListByKindQuery = gql`
  query ListByKind(
    $sort: ClassesRanks!
    $optional: Boolean
    $department: Department
  ) {
    listClasses(
      where: { sort: $sort, optional: $optional, department: $department }
    ) {
      id
      name
      cod
      useful
      easy
      recommended
    }
  }
`;

export const SearchHomeQuery = gql`
  query SearchHome($value: String!) {
    searchAll(where: { value: $value }) {
      ... on User {
        id
        name
      }

      ... on UfvClass {
        id
        name
        cod
      }
    }
  }
`;

export const UserProfileQuery = gql`
  query UserProfile($id: String!) {
    user(where: { id: $id }) {
      id
      name
      createdAt
      rate
      course
      year
      reviews {
        id
        anonymous
        recommended
        createdAt
        easy
        useful
        description
        reviewer {
          id
        }
      }
    }
  }
`;

export const MeIdQuery = gql`
  query MeId {
    me {
      id
    }
  }
`;

export const UfvClassDetailQuery = gql`
  query UfvClassDetail($id: String!) {
    ufvClass(where: { id: $id }) {
      id
      cod
      name
      optional
      useful
      easy
      recommended
    }
  }
`;
