import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Layout from "src/components/Layout";
class MinhasAvaliacoes extends React.Component<
  WithStyles<MinhasAvaliacoesClassesNames>
> {
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
}

type MinhasAvaliacoesClassesNames = "base";
const styles: StyleRulesCallback<MinhasAvaliacoesClassesNames> = theme => ({
  base: {}
});
export default withStyles(styles)(MinhasAvaliacoes);
