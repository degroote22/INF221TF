import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Mood from "@material-ui/icons/Mood";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Whatshot from "@material-ui/icons/Whatshot";
import * as React from "react";
import { Link } from "react-router-dom";
import * as Routes from "src/utils/routes";
import { LinkStyle } from "src/utils/styles";
import { BLOCK } from "../../utils/constants";

export default class HomepageTabs extends React.Component {
  public render() {
    return (
      <Grid container={true}>
        <Grid item={true} xs={12} md={4}>
          <Link to={Routes.ListarFacil} style={LinkStyle}>
            <TabButton title="Mais fáceis" icon={Mood} />
          </Link>
        </Grid>
        <Grid item={true} xs={12} md={4}>
          <Link to={Routes.ListarUtil} style={LinkStyle}>
            <TabButton title="Mais úteis" icon={ThumbUp} />
          </Link>
        </Grid>
        <Grid item={true} xs={12} md={4}>
          <Link to={Routes.ListarRecomendado} style={LinkStyle}>
            <TabButton title="Mais recomendadas" icon={Whatshot} />
          </Link>
        </Grid>
      </Grid>
    );
  }
}

const TabButtonBase: React.SFC<
  WithStyles<ButtonClassesNames> & { title: string; icon: any }
> = props => {
  const Icon = props.icon;
  return (
    <Button className={props.classes.base}>
      <span className={props.classes.rowOrColumn}>
        <span style={{ padding: BLOCK / 8 }}>
          <Icon color="primary" />
        </span>
        <Typography component="span" variant="subheading" color="primary">
          {props.title}
        </Typography>
      </span>
    </Button>
  );
};

type ButtonClassesNames = "base" | "rowOrColumn";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  base: {
    height: BLOCK,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: 2 * BLOCK
    }
  },
  rowOrColumn: {
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column"
    }
  }
});

const TabButton = withStyles(styles)(TabButtonBase);
