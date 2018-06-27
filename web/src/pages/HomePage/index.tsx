import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import * as React from "react";
import CardHeaderAction from "src/components/CardHeaderAction";
import Menu from "../../components/Menu";
import { BLOCK } from "../../utils/constants";
import Search from "./Search";

type ClassNames = "actions" | "card" | "root" | "headerRoot" | "headerText";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  actions: {
    display: "flex"
  },
  card: {
    boxShadow: "0px 0px 0px 0px black",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      boxShadow: [
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2), ",
        "0px 2px 2px 0px rgba(0, 0, 0, 0.14), ",
        "0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
      ].join(""),
      width: 960
    }
  },
  headerRoot: {
    backgroundColor: theme.palette.primary.dark
  },
  headerText: {
    color: theme.palette.primary.contrastText
  },
  root: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: BLOCK / 2,
      paddingBottom: BLOCK / 2
    }
  }
});

const initialState = {
  anchorEl: undefined as HTMLElement | undefined
};

class RecipeReviewCard extends React.Component<
  WithStyles<ClassNames>,
  typeof initialState
> {
  public state = initialState;

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.headerRoot,
              subheader: classes.headerText,
              title: classes.headerText
            }}
            action={<CardHeaderAction onPopopverClick={this.onPopopverClick} />}
            title="Catálogo UFV"
            subheader="Escolha por categoria ou use a busca"
          />
          <Menu
            anchorEl={this.state.anchorEl}
            onClose={this.handlePopoverClose}
          />
          <Search />
        </Card>
      </div>
    );
  }

  private onPopopverClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  private handlePopoverClose = () => {
    this.setState({
      anchorEl: undefined
    });
  };
}

export default withStyles(styles)(RecipeReviewCard);
