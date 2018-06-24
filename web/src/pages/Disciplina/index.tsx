import {
  Button,
  CardContent,
  StyleRulesCallback,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import Fab from "src/components/Fab";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import Averages from "src/pages/Disciplina/Averages";
import ReviewManager from "src/singletons/ReviewManager";
import { IClassReview } from "src/utils/types";
import ClassManager from "../../singletons/ClassManager";
import { BLOCK } from "../../utils/constants";
import { AvaliarDisciplinaGo } from "../../utils/routes";

const initialState = {
  showMore: false
};

class Disciplina extends React.Component<
  WithStyles<DisciplinaClassNames> & RouteComponentProps<{ id: string }>,
  typeof initialState
> {
  public readonly state = initialState;
  public render() {
    const disciplina = ClassManager.getClass(this.props.match.params.id);
    const title = disciplina.cod + " - " + disciplina.name;
    const reviews = ReviewManager.getReviews(disciplina.id);

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
