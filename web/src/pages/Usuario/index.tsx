import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import { graphql } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import { ReviewsFromUser } from "src/generated/types";
import UserProfile from "../../components/UserProfile";
import { ReviewsFromUserQuery } from "../../config/Queries";

type IProps = RouteComponentProps<{ id: string }>;

const withData = graphql<
  IProps,
  ReviewsFromUser.Query,
  ReviewsFromUser.Variables
>(ReviewsFromUserQuery, {
  options: props => ({
    variables: {
      userId: props.match.params.id,
      first: 15
    }
  })
});

export default withData(props => {
  const reviews = props.data
    ? props.data.reviews
      ? props.data.reviews
      : []
    : [];

  return (
    <Layout title={"Perfil do usuário"}>
      <CardContent>
        <UserProfile id={props.match.params.id} />
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
});
