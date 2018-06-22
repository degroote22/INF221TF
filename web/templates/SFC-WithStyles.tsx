import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";

const TrocarNome: React.SFC<WithStyles<ButtonClassesNames> & {}> = props => {
  return <span />;
};

type ButtonClassesNames = "base";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  base: {}
});

export default withStyles(styles)(TrocarNome);
