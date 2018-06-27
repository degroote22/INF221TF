import Paper from "@material-ui/core/Paper";
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import SearchSuggestions from "./SearchSuggestions";

type ClassNames =
  | "cssLabel"
  | "container"
  | "root"
  | "input"
  | "inputWrapper"
  | "cssFocused";

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    flexGrow: 1,
    position: "relative"
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
  inputValueSuggested: "",
  inputFocused: false
};
class HomeSearch extends React.Component<
  WithStyles<ClassNames>,
  typeof initialState
> {
  public readonly state = initialState;
  private h = 0;

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
          <SearchSuggestions
            search={this.state.inputValueSuggested}
            inputFocused={this.state.inputFocused}
          />
        </div>
      </div>
    );
  }

  private onInputFocus = () => {
    this.setState({ inputFocused: true });
  };
  private onInputBlur = () => {
    this.setState({ inputFocused: false });
  };

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ inputValue: value });

    clearTimeout(this.h);
    this.h = setTimeout(() => {
      this.setState({ inputValueSuggested: value });
    }, 300) as any;
  };
}

export default withStyles(styles)(HomeSearch);
