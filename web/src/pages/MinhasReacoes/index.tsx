import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { ComponentBase } from "resub";
import Layout from "src/components/Layout";
// import Review from "src/components/Review";
import ReviewManager from "src/singletons/ReviewManager";
import { IClassReview } from "../../utils/types";
const initialState = {
  reviews: [] as IClassReview[]
};
class MinhasAvaliacoes extends ComponentBase<
  WithStyles<MinhasAvaliacoesClassesNames>,
  typeof initialState
> {
  public readonly state = initialState;

  public render() {
    // const reviews = this.state.reviews;

    return (
      <Layout title="Minhas Reações">
        <CardContent>
          {/* {reviews.map(r => <Review review={r} position="other" key={r.id} />)} */}
        </CardContent>
      </Layout>
    );
  }

  protected _buildState(props: {}, initial: boolean) {
    return {
      ...this.state,
      reviews: ReviewManager.getMyVotes()
    };
  }
}

type MinhasAvaliacoesClassesNames = "base";
const styles: StyleRulesCallback<MinhasAvaliacoesClassesNames> = theme => ({
  base: {}
});
export default withStyles(styles)(MinhasAvaliacoes);
