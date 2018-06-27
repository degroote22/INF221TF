import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import red from "@material-ui/core/colors/red";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Layout from "src/components/Layout";

enum Stages {
  loading_hidden,
  loading,
  timeout
}

const LayoutWrapper: React.SFC<{ layout: boolean }> = ({ layout, children }) =>
  layout ? (
    <Layout title="Carregando">{children}</Layout>
  ) : (
    <span>{children}</span>
  );

const Inner: React.SFC<{
  classes: { progress: string; wrapper: string };
  layout: boolean;
  stage: Stages;
}> = props => {
  const { stage, layout, classes } = props;
  if (stage === Stages.loading_hidden) {
    return null;
  }
  if (stage === Stages.loading) {
    return (
      <LayoutWrapper layout={layout}>
        <div className={classes.wrapper}>
          <CircularProgress className={classes.progress} />
        </div>
      </LayoutWrapper>
    );
  }
  return (
    <LayoutWrapper layout={layout}>
      <div className={classes.wrapper}>
        <Typography
          variant="body2"
          className={classes.progress}
          style={{ color: red[500] }}
        >
          Erro na transferência. Confira sua conexão.
        </Typography>
      </div>
    </LayoutWrapper>
  );
};
const initialState = {
  stage: Stages.loading_hidden
};
class Loading extends React.Component<
  WithStyles<ClassesNames> & { layout: boolean },
  typeof initialState
> {
  public readonly state = initialState;

  private t1 = 0;
  private t2 = 0;
  public componentDidMount() {
    this.t1 = setTimeout(this.setLoading, 300) as any;
    this.t2 = setTimeout(this.setTimeout, 5000) as any;
  }

  public componentWillUnmount() {
    clearTimeout(this.t1);
    clearTimeout(this.t2);
  }

  public render() {
    const { classes, layout } = this.props;
    const { stage } = this.state;

    return <Inner classes={classes} stage={stage} layout={layout} />;
  }

  private setLoading = () => {
    this.setState({ stage: Stages.loading });
  };

  private setTimeout = () => {
    this.setState({ stage: Stages.timeout });
  };
}

type ClassesNames = "progress" | "wrapper";
const styles: StyleRulesCallback<ClassesNames> = theme => ({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Loading);
