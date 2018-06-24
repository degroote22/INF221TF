import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import AuthManager from "src/singletons/AuthManager";
import ReviewManager from "src/singletons/ReviewManager";

const MinhasAvaliacoes: React.SFC<
  WithStyles<MinhasAvaliacoesClassesNames>
> = props => {
  const me = AuthManager.getId();
  const reviews = ReviewManager.getUserReviews(me);

  return (
    <Layout title="Minhas Avaliações">
      <CardContent>
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
};

type MinhasAvaliacoesClassesNames = "base";
const styles: StyleRulesCallback<MinhasAvaliacoesClassesNames> = theme => ({
  base: {}
});
export default withStyles(styles)(MinhasAvaliacoes);
