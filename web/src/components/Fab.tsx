import Button from "@material-ui/core/Button";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Edit";
import * as React from "react";
import { Link } from "react-router-dom";
import { BLOCK } from "src/utils/constants";

const Fab: React.SFC<
  { title: string; to: string; zIndex: number } & WithStyles<ButtonClassesNames>
> = props => {
  return (
    <span className={props.classes.base} style={{ zIndex: props.zIndex }}>
      <Link to={props.to}>
        <Button variant="fab" color="secondary">
          <Tooltip title={props.title}>
            <AddIcon />
          </Tooltip>
        </Button>
      </Link>
    </span>
  );
};

type ButtonClassesNames = "base";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  base: {
    bottom: 0,
    padding: BLOCK / 4,
    position: "fixed",
    right: 0
  }
});

export default withStyles(styles)(Fab);
