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
import { UfvClassDetailQuery } from "src/config/Queries";
import {
  UfvClassDetail,
  withUfvClassDetail,
  withUfvClassDetailChildProps
} from "src/generated/types";
import Averages from "src/pages/Disciplina/Averages";
import HistoryManager from "src/singletons/HistoryManager";
import { BLOCK } from "../../utils/constants";

const initialState = {
  showMore: false
};

type IProps = withUfvClassDetailChildProps<
  WithStyles<DisciplinaClassNames> & RouteComponentProps<{ id: string }>
>;

class Disciplina extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;

  public render() {
    if (
      this.props.data.loading ||
      this.props.data.error ||
      !this.props.data.ufvClass
    ) {
      return <Loading layout={true} />;
    }
    const disciplina = this.props.data.ufvClass;
    const reviews = disciplina.reviews
      ? [...disciplina.reviews].sort((a, b) => b.score - a.score)
      : [];

    const title = disciplina.cod + " - " + disciplina.name;

    return (
      <Layout title={title}>
        <CardContent>
          <Fab
            title="Avaliar esta disciplina"
            to={HistoryManager.avaliarRoute(disciplina.id)}
            zIndex={9999}
          />
          <Averages class={disciplina} />
          {this.renderFirstReviews(reviews)}
          {this.renderShowMore(reviews)}
        </CardContent>
      </Layout>
    );
  }

  private renderFirstReviews = (reviews: UfvClassDetail.Reviews[]) => {
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
  private renderShowMore = (reviews: UfvClassDetail.Reviews[]) => {
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
const styles: StyleRulesCallback<DisciplinaClassNames> = () => ({
  center: {
    display: "flex",
    justifyContent: "center",
    paddingTop: BLOCK / 2
  }
});

const withData = withUfvClassDetail<
  RouteComponentProps<{ id: string }> & WithStyles<DisciplinaClassNames>
>(UfvClassDetailQuery, {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
});

export default withStyles(styles)(withData(Disciplina));
