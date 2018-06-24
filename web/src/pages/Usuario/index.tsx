import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ComponentBase } from "resub";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import ReviewManager from "src/singletons/ReviewManager";
import UserProfile from "../../components/UserProfile";
import { IClassReview } from "../../utils/types";
type IProps = WithStyles<UsuarioClassesNames> &
  RouteComponentProps<{ id: string }>;

const initalState = {
  reviews: [] as IClassReview[]
};
class Usuario extends ComponentBase<IProps, typeof initalState> {
  public readonly state = initalState;
  public render() {
    const reviews = this.state.reviews;

    return (
      <Layout title={"Perfil do usuário"}>
        <CardContent>
          <UserProfile id={this.props.match.params.id} />
          {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
        </CardContent>
      </Layout>
    );
  }

  protected _buildState(props: IProps, initial: boolean) {
    return {
      ...this.state,
      reviews: ReviewManager.getUserReviews(props.match.params.id)
    };
  }
}
type UsuarioClassesNames = "base";
const styles: StyleRulesCallback<UsuarioClassesNames> = theme => ({
  base: {}
});

export default withStyles(styles)(Usuario);
