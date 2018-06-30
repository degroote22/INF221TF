import * as React from "react";
import { SetVoteOnReviewMutation } from "src/config/Mutations";
import { IsRegisteredQuery, ReviewExtraDataQuery } from "src/config/Queries";
import {
  UfvClassDetail,
  withIsRegistered,
  withIsRegisteredDataValue,
  withReviewExtraData,
  withReviewExtraDataDataValue,
  withSetVoteOnReview,
  withSetVoteOnReviewMutationFunc
} from "src/generated/types";
import { IReviewPosition } from "src/utils/types";
import Presentation from "./Presentation";

interface IWithReviewExtraData {
  extraData: withReviewExtraDataDataValue;
}

interface IProps {
  review: UfvClassDetail.Reviews;
  position: IReviewPosition;
}

interface IWithSetVoteOnReview {
  setVote: withSetVoteOnReviewMutationFunc;
}

const withData = withReviewExtraData<
  IProps & IWithSetVoteOnReview & IWithLogged,
  IWithReviewExtraData
>(ReviewExtraDataQuery, {
  options: props => ({
    variables: { id: props.review.id },
    fetchPolicy: "cache-and-network"
  }),
  props: p => ({ extraData: p.data })
});

const withMutation = withSetVoteOnReview<
  IProps & IWithLogged,
  IWithSetVoteOnReview
>(SetVoteOnReviewMutation, {
  props: p => ({ setVote: p.mutate }),
  options: p => ({
    refetchQueries: [
      {
        query: ReviewExtraDataQuery,
        variables: { id: p.review.id }
      }
    ]
  })
});

interface IWithLogged {
  logged: withIsRegisteredDataValue;
}

const withLogged = withIsRegistered<IProps, IWithLogged>(IsRegisteredQuery, {
  props: p => ({ logged: p.data })
});

export default withLogged(
  withMutation(
    withData(props => {
      const myId = props.extraData.me ? props.extraData.me.id : "";

      const myVote = props.extraData.myvote
        ? props.extraData.myvote.type
        : null;

      const position: IReviewPosition =
        props.review.reviewer.id === myId ? "mine" : props.position;

      return (
        <Presentation
          registered={Boolean(props.logged.me && props.logged.me.id)}
          review={props.review}
          position={position}
          myVote={myVote}
          setVote={props.setVote}
        />
      );
    })
  )
);
