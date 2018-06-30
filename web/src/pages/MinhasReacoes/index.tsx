import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import { AllMyVotesQuery } from "src/config/Queries";
import { withAllMyVotes } from "src/generated/types";

export default withAllMyVotes(AllMyVotesQuery)(props => {
  const reviews = props.data.myvotes
    ? props.data.myvotes.map(x => x.review)
    : [];
  return (
    <Layout title="Minhas Reações">
      <CardContent>
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
});
