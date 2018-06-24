import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { ComponentBase } from "resub";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import AuthManager from "src/singletons/AuthManager";
import ReviewManager from "src/singletons/ReviewManager";
import { IClassReview } from "src/utils/types";

const initialState = {
  reviews: [] as IClassReview[]
};

class MinhasAvaliacoes extends ComponentBase<
  WithStyles<MinhasAvaliacoesClassesNames>,
  typeof initialState
> {
  public readonly state = initialState;
  public render() {
    return (
      <Layout title="Minhas Avaliações">
        <CardContent>
          {this.state.reviews.map(r => (
            <Review review={r} position="other" key={r.id} />
          ))}
        </CardContent>
      </Layout>
    );
  }
  protected _buildState(props: {}, initial: boolean) {
    const me = AuthManager.getId();

    return {
      ...this.state,
      reviews: ReviewManager.getUserReviews(me)
    };
  }
}

type MinhasAvaliacoesClassesNames = "base";
const styles: StyleRulesCallback<MinhasAvaliacoesClassesNames> = theme => ({
  base: {}
});
export default withStyles(styles)(MinhasAvaliacoes);
