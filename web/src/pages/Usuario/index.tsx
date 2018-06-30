import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import { withReviewsFromUser } from "src/generated/types";
import UserProfile from "../../components/UserProfile";
import { ReviewsFromUserQuery } from "../../config/Queries";

type IProps = RouteComponentProps<{ id: string }>;

const withData = withReviewsFromUser<IProps>(ReviewsFromUserQuery, {
  options: props => ({
    variables: {
      userId: props.match.params.id,
      first: 15
    }
  })
});

export default withData(props => {
  const reviews = props.data.reviews ? props.data.reviews : [];

  return (
    <Layout title={"Perfil do usuário"}>
      <CardContent>
        <UserProfile id={props.match.params.id} />
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
});
