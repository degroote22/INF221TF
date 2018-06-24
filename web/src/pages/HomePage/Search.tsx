import { Divider } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Face from "@material-ui/icons/Face";
import School from "@material-ui/icons/School";
import * as React from "react";
import { Link } from "react-router-dom";
import Tabs from "src/pages/HomePage/Tabs";
import SearchManager, {
  IResult,
  IResultType
} from "../../singletons/SearchManager";
import { DisciplinaGo, UsuarioGo } from "../../utils/routes";
import { LinkStyle } from "../../utils/styles";

type ClassNames =
  | "cssLabel"
  | "container"
  | "paper"
  | "root"
  | "input"
  | "inputWrapper"
  | "cssFocused";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "relative",
    left: 0,
    right: 0
  },
  root: {
    flexGrow: 1
  },
  input: {
    padding: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  inputWrapper: {
    position: "relative",
    zIndex: 999
  },
  cssLabel: {
    "&::before": {
      borderBottom: "0px solid " + theme.palette.primary.main
    },
    flexWrap: "wrap"
  },
  cssFocused: {}
});
const initialState = {
  inputValue: "",
  inputFocused: false
};
class HomeSearch extends React.Component<
  WithStyles<ClassNames>,
  typeof initialState
> {
  public readonly state = initialState;
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.inputWrapper}>
            <Paper className={classes.input} square={false} elevation={2}>
              <TextField
                fullWidth={true}
                label="Busca"
                placeholder="Procure matéria ou usuário"
                onChange={this.handleInputChange}
                onFocus={this.onInputFocus}
                onBlur={this.onInputBlur}
                InputProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
              />
            </Paper>
          </div>
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }

  private renderSuggestions = () => {
    const { classes } = this.props;
    const result = SearchManager.search(this.state.inputValue);
    return (
      <React.Fragment>
        <Paper className={classes.paper} square={false} elevation={0}>
          <Collapse in={this.state.inputFocused && result.length !== 0}>
            {result.map(r => {
              return this.renderResult(r);
            })}
          </Collapse>

          <Collapse
            in={
              this.state.inputFocused &&
              this.state.inputValue !== "" &&
              result.length === 0
            }
          >
            <ListItem button={false}>
              <ListItemText primary={"Nenhum resultado"} />
            </ListItem>
          </Collapse>
          <Divider />
        </Paper>

        <Tabs />
      </React.Fragment>
    );
  };

  private renderResult = (result: IResult) => {
    if (result.type === IResultType.class) {
      const c = result.value;
      return (
        <Link key={"c" + c.id} to={DisciplinaGo(c.id)} style={LinkStyle}>
          <ListItem key={c.cod} button={true}>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary={c.cod} secondary={c.name} />
          </ListItem>
        </Link>
      );
    }
    const u = result.value;
    return (
      <Link key={"u" + u.id} to={UsuarioGo(u.id)} style={LinkStyle}>
        <ListItem button={true}>
          <ListItemIcon>
            <Face />
          </ListItemIcon>
          <ListItemText primary={u.name} />
        </ListItem>
      </Link>
    );
  };

  private onInputFocus = () => {
    this.setState({ inputFocused: true });
  };
  private onInputBlur = () => {
    this.setState({ inputFocused: false });
  };

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };
}

export default withStyles(styles)(HomeSearch);
