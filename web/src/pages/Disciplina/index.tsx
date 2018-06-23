import {
  CardContent,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import Layout from "src/components/Layout";
import ClassManager from "../../singletons/ClassManager";

class Disciplina extends React.Component<
  WithStyles<DisciplinaClassNames> & RouteComponentProps<{ id: string }>
> {
  public render() {
    const disciplina = ClassManager.getClass(this.props.match.params.id);

    return (
      <Layout title={disciplina.cod}>
        <CardContent>
          {/* <Averages class={disciplina}/> */}
          {/* <BestReviews class={disciplina} /> */}
          {/* <ShowMoreReviews class={disciplina}/> */}
        </CardContent>
      </Layout>
    );
  }
}
type DisciplinaClassNames = "container";
const styles: StyleRulesCallback<DisciplinaClassNames> = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  }
});

export default withStyles(styles)(Disciplina);
