import * as React from "react";
import { DataValue, graphql, MutationFunc } from "react-apollo";
import { SetVoteOnReviewMutation } from "src/config/Mutations";
import { ReviewExtraDataQuery } from "src/config/Queries";
import {
  ReviewExtraData,
  SetVoteOnReview,
  UfvClassDetail
} from "src/generated/types";
import { IReviewPosition } from "src/utils/types";
import Presentation from "./Presentation";

interface IRenames {
  extraData?: DataValue<ReviewExtraData.Query, ReviewExtraData.Variables>;
  setVote?: MutationFunc<SetVoteOnReview.Mutation, SetVoteOnReview.Variables>;
  review: UfvClassDetail.Reviews;
  position: IReviewPosition;
}

interface IProps {
  review: UfvClassDetail.Reviews;
  position: IReviewPosition;
}

const withData = graphql<
  IProps,
  ReviewExtraData.Query,
  ReviewExtraData.Variables,
  IRenames
>(ReviewExtraDataQuery, {
  options: props => ({ variables: { id: props.review.id } }),
  props: p => ({ ...p.ownProps, extraData: p.data as any })
});

const withMutation = graphql<
  IProps,
  SetVoteOnReview.Mutation,
  SetVoteOnReview.Variables,
  IRenames
>(SetVoteOnReviewMutation, {
  props: p => ({ ...p.ownProps, setVote: p.mutate })
});

export default withMutation(
  withData(props => {
    const myId = props.extraData
      ? props.extraData.me
        ? props.extraData.me.id
        : ""
      : "";

    const myVote = props.extraData
      ? props.extraData.myvote
        ? props.extraData.myvote.type
        : null
      : null;

    const position: IReviewPosition =
      props.review.reviewer.id === myId ? "mine" : props.position;

    return (
      <Presentation
        review={props.review}
        position={position}
        myVote={myVote}
        setVote={props.setVote}
      />
    );
  })
);
