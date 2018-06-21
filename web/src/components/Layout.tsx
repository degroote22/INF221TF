import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import HistoryManager from "../singletons/HistoryManager";
import { BLOCK } from "../utils/constants";
import Menu from "./Menu";

type ClassNames =
  | "paper"
  | "root"
  | "bigHeader"
  | "bigButton"
  | "appBar"
  | "flex"
  | "menuButton";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  bigButton: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 99999
    }
  },
  bigHeader: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      padding: BLOCK / 4
    }
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    height: "100%",
    position: "absolute",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "initial",
      minHeight: theme.breakpoints.values.md / 2,
      width: theme.breakpoints.values.md
    }
  },
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      paddingTop: BLOCK / 2
    }
  }
});

const initialState = {
  anchorEl: undefined as HTMLElement | undefined
};

class Layout extends React.Component<
  WithStyles<ClassNames> & { title: string },
  typeof initialState
> {
  public state = initialState;

  public render() {
    const { classes } = this.props;

    return (
      <Modal open={true}>
        <div className={classes.root}>
          {this.renderBigButton()}
          <div
            onClick={HistoryManager.goHome}
            style={{
              height: "100%",
              position: "absolute",
              top: 0,
              width: "100%"
            }}
          />
          <div className={classes.paper}>
            {this.renderAppBar()}
            {this.renderBigHeader()}
            {this.props.children}
          </div>
        </div>
      </Modal>
    );
  }

  private renderBigHeader = () => {
    const { classes } = this.props;

    return (
      <span className={classes.bigHeader}>
        <Typography variant="display1">{this.props.title}</Typography>
      </span>
    );
  };

  private renderBigButton = () => {
    const { classes } = this.props;

    return (
      <span className={classes.bigButton}>
        <Button
          variant="fab"
          color="primary"
          aria-label="delete"
          onClick={HistoryManager.goHome}
        >
          <CloseIcon />
        </Button>
      </span>
    );
  };

  private renderAppBar = () => {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={HistoryManager.goHome}
            aria-label="Menu"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {this.props.title}
          </Typography>
          <IconButton onClick={this.onPopopverClick}>
            <MoreVertIcon color="secondary" />
          </IconButton>
          <Menu
            onClose={this.handlePopoverClose}
            anchorEl={this.state.anchorEl}
          />
        </Toolbar>
      </AppBar>
    );
  };

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

// We need an intermediary variable for handling the recursive nesting.
const LayoutWrapped = withStyles(styles)(Layout);

export default LayoutWrapped;
