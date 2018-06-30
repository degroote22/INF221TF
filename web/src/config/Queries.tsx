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
      reviews {
        id
        createdAt
        useful
        score
        easy
        description
        recommended
        anonymous
        reviewer {
          id
          name
          rate
        }
      }
    }
  }
`;

export const UfvClassNameQuery = gql`
  query UfvClassName($id: String!) {
    ufvClass(where: { id: $id }) {
      cod
      name
    }
  }
`;

export const MyVoteInReviewQuery = gql`
  query MyVoteInReview($reviewId: String!) {
    myvote(where: { reviewId: $reviewId }) {
      type
    }
  }
`;

export const ReviewsFromUserQuery = gql`
  query ReviewsFromUser($userId: String!, $first: Int!) {
    reviews(where: { userId: $userId, first: $first }) {
      id
      createdAt
      score
      useful
      easy
      description
      recommended
      anonymous
      reviewer {
        id
        name
        rate
      }
    }
  }
`;

export const MyOwnReviewsQuery = gql`
  query MyOwnReviews {
    myreviews {
      id
      score
      createdAt
      useful
      easy
      description
      recommended
      anonymous
      reviewer {
        id
        name
        rate
      }
    }
  }
`;

export const ReviewExtraDataQuery = gql`
  query ReviewExtraData($id: String!) {
    me {
      id
    }

    myvote(where: { reviewId: $id }) {
      type
    }
  }
`;

export const ReviewDataToEditQuery = gql`
  query ReviewDataToEdit($id: String!) {
    review(where: { id: $id }) {
      classReviewed {
        cod
        id
      }
      description
      easy
      useful
      anonymous
      recommended
      teacher
    }
  }
`;

export const AllMyVotesQuery = gql`
  query AllMyVotes {
    myvotes {
      review {
        id
        score
        createdAt
        useful
        easy
        description
        recommended
        anonymous
        reviewer {
          id
          name
          rate
        }
      }
    }
  }
`;
