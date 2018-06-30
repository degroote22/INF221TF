import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import { withMyOwnReviews } from "src/generated/types";
import { MyOwnReviewsQuery } from "../../config/Queries";

const withData = withMyOwnReviews(MyOwnReviewsQuery);

export default withData(props => {
  const reviews = props.data.myreviews ? props.data.myreviews : [];
  return (
    <Layout title="Minhas Avaliações">
      <CardContent>
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
});
