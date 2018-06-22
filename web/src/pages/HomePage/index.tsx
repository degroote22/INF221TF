import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { Link } from "react-router-dom";
import CardHeaderAction from "src/components/CardHeaderAction";
import Fab from "src/pages/HomePage/Fab";
import { LinkStyle } from "src/utils/styles";
import { SearchState } from "src/utils/types";
import Menu from "../../components/Menu";
import ClassManager from "../../singletons/ClassManager";
import UserManager from "../../singletons/UserManager";
import { BLOCK } from "../../utils/constants";
import { DisciplinaGo, UsuarioGo } from "../../utils/routes";
import Tabs from "./Tabs";

type ClassNames =
  | "actions"
  | "card"
  | "root"
  | "headerRoot"
  | "headerText"
  | "textField";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  actions: {
    display: "flex"
  },
  card: {
    boxShadow: "0px 0px 0px 0px black",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      boxShadow:
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2),\
         0px 2px 2px 0px rgba(0, 0, 0, 0.14),\
         0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
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
      paddingTop: BLOCK / 2
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const initialState = {
  anchorEl: undefined as HTMLElement | undefined,
  search: "",
  state: SearchState.NONE
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
        <Fab />
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.headerRoot,
              subheader: classes.headerText,
              title: classes.headerText
            }}
            action={<CardHeaderAction onPopopverClick={this.onPopopverClick} />}
            title="Catálogo de Matérias - UFV"
            subheader="Escolha por categoria ou use a busca"
          />
          <Menu
            anchorEl={this.state.anchorEl}
            onClose={this.handlePopoverClose}
          />
          <Tabs />
          <CardContent className={classes.actions}>
            <TextField
              value={
                this.state.state === SearchState.CLASS ? this.state.search : ""
              }
              label="Procurar disciplina"
              placeholder="ex: INF221"
              fullWidth={true}
              margin="normal"
              onChange={this.onChangeClass}
            />
            <span className={classes.textField} />
            <TextField
              value={
                this.state.state === SearchState.USER ? this.state.search : ""
              }
              label="Procurar usuário"
              placeholder="ex: Lucas da Silva"
              fullWidth={true}
              margin="normal"
              onChange={this.onChangeUser}
            />
          </CardContent>
          <Collapse
            in={this.state.state !== SearchState.NONE}
            timeout="auto"
            unmountOnExit={true}
          >
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {this.state.state === SearchState.CLASS
                    ? "Escolha a disciplina"
                    : "Escolha o usuário"}
                </ListSubheader>
              }
            >
              {this.state.state === SearchState.CLASS
                ? this.renderClassList()
                : this.renderUserList()}
            </List>
          </Collapse>
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

  private renderUserList = () => {
    return UserManager.getUsers(this.state.search, this.state.state).map(u => {
      return (
        <Link key={u.id} to={UsuarioGo(u.id)} style={LinkStyle}>
          <ListItem button={true}>
            <ListItemText primary={u.name} />
          </ListItem>
        </Link>
      );
    });
  };

  private renderClassList = () => {
    return ClassManager.getClasses(this.state.search, this.state.state).map(
      c => {
        return (
          <Link key={c.id} to={DisciplinaGo(c.id)} style={LinkStyle}>
            <ListItem button={true}>
              <ListItemText primary={c.name} />
            </ListItem>
          </Link>
        );
      }
    );
  };

  private onChangeClass = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
      state: SearchState.CLASS
    });
  };

  private onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
      state: SearchState.USER
    });
  };
}

export default withStyles(styles)(RecipeReviewCard);
