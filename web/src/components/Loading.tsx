import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Layout from "src/components/Layout";

const Loading: React.SFC<
  WithStyles<ClassesNames> & { layout: boolean }
> = props => {
  if (props.layout) {
    return (
      <Layout title="Carregando">
        <span />
      </Layout>
    );
  }
  return <span />;
};

type ClassesNames = "base";
const styles: StyleRulesCallback<ClassesNames> = theme => ({
  base: {}
});

export default withStyles(styles)(Loading);
