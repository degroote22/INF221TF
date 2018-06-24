import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import {
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ComponentBase } from "resub";
import Fab from "src/components/Fab";
import Layout from "src/components/Layout";
import Loading from "src/components/Loading";
import Review from "src/components/Review";
import Averages from "src/pages/Disciplina/Averages";
import ReviewManager from "src/singletons/ReviewManager";
import { IClassReview, IClassType } from "src/utils/types";
import ClassManager from "../../singletons/ClassManager";
import { BLOCK } from "../../utils/constants";
import { AvaliarDisciplinaGo } from "../../utils/routes";

const initialState = {
  showMore: false,
  reviews: [] as IClassReview[],
  class: undefined as IClassType | undefined
};
type IProps = WithStyles<DisciplinaClassNames> &
  RouteComponentProps<{ id: string }>;
class Disciplina extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;

  public render() {
    const disciplina = this.state.class;
    if (!disciplina) {
      return <Loading layout={true} />;
    }
    const title = disciplina.cod + " - " + disciplina.name;
    const reviews = this.state.reviews;

    return (
      <Layout title={title}>
        <CardContent>
          <Fab
            title="Avaliar esta disciplina"
            to={AvaliarDisciplinaGo(disciplina.id)}
            zIndex={9999}
          />
          <Averages class={disciplina} />
          {this.renderFirstReviews(reviews)}
          {this.renderShowMore(reviews)}
        </CardContent>
      </Layout>
    );
  }

  protected _buildState(
    props: IProps,
    initialBuild: boolean
  ): typeof initialState {
    const id = props.match.params.id;
    return {
      ...this.state,
      reviews: ReviewManager.getReviews(id),
      class: ClassManager.getClass(id)
    };
  }

  private renderFirstReviews = (reviews: IClassReview[]) => {
    if (reviews.length === 0) {
      return (
        <div className={this.props.classes.center}>
          <Typography variant="subheading">
            Não há reviews para esta disciplina
          </Typography>
        </div>
      );
    } else {
      const r0 = reviews[0];
      const r1 = reviews[1];
      const r2 = reviews[2];

      return (
        <React.Fragment>
          {r0 && <Review review={r0} position="first" />}
          {r1 && <Review review={r1} position="second" />}
          {r2 && <Review review={r2} position="third" />}
        </React.Fragment>
      );
    }
  };
  private renderShowMore = (reviews: IClassReview[]) => {
    if (reviews.length <= 3) {
      return null;
    }
    if (this.state.showMore) {
      return reviews.slice(3).map(r => {
        return <Review key={r.id} review={r} position="other" />;
      });
    }
    return (
      <div className={this.props.classes.center}>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onShowMore}
          >
            Mostrar mais
          </Button>
        </div>
      </div>
    );
  };

  private onShowMore = () => {
    this.setState({ showMore: true });
  };
}
type DisciplinaClassNames = "center";
const styles: StyleRulesCallback<DisciplinaClassNames> = theme => ({
  center: {
    display: "flex",
    justifyContent: "center",
    paddingTop: BLOCK / 2
  }
});

export default withStyles(styles)(Disciplina);
