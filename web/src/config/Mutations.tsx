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

export const UpdateReviewMutation = gql`
  mutation UpdateReview(
    $cod: String!
    $id: String!
    $teacher: String!
    $useful: ReviewUseful!
    $easy: ReviewEasy!
    $description: String!
    $anonymous: Boolean!
    $recommended: Boolean!
  ) {
    editReview(
      data: {
        cod: $cod
        id: $id
        teacher: $teacher
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

export const WriteReviewMutation = gql`
  mutation WriteReview(
    $cod: String!
    $teacher: String!
    $useful: ReviewUseful!
    $easy: ReviewEasy!
    $description: String!
    $anonymous: Boolean!
    $recommended: Boolean!
  ) {
    createReview(
      data: {
        cod: $cod
        teacher: $teacher
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

export const SetVoteOnReviewMutation = gql`
  mutation SetVoteOnReview($reviewId: String!, $type: ReviewVotesTypes!) {
    setVote(data: { reviewId: $reviewId, type: $type }) {
      type
      id
    }
  }
`;
