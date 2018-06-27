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

export const RegisterMutation = gql`
  mutation Register($course: UfvCourses!, $year: UfvYears!) {
    register(user: { course: $course, year: $year }) {
      id
    }
  }
`;

export const DeleteAccountMutation = gql`
  mutation DeleteAccount {
    deleteAcc {
      id
    }
  }
`;

export const WriteReviewMutation = gql`
  mutation WriteReview(
    $cod: String!
    $useful: ReviewUseful!
    $easy: ReviewEasy!
    $description: String!
    $anonymous: Boolean!
    $recommended: Boolean!
  ) {
    createReview(
      data: {
        cod: $cod
        useful: $useful
        easy: $easy
        description: $description
        anonymous: $anonymous
        recommended: $recommended
      }
    ) {
      id
    }
  }
`;
