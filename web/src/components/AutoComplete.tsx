import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import {
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import * as React from "react";

class AutoComplete<T> extends React.Component<
  WithStyles<SearchSuggestionClassnames> & {
    search: string;
    onChange: (primary: string, id: string) => void;
    open: boolean;
    getPrimary: (obj: T) => string;
    getId: (obj: T) => string;
    getSecondary: (obj: T) => string;
    getResult: (search: string) => T[];
    top: number;
  }
> {
  public render() {
    const { search, classes, open } = this.props;
    if (!open || search === "") {
      return null;
    }
    const result = this.props.getResult(search);

    return (
      <Paper
        className={classes.paper}
        style={{
          top: this.props.top
        }}
        square={false}
        elevation={1}
      >
        <List component="nav" style={{ padding: 0 }}>
          {result.map(c => {
            const primary = this.props.getPrimary(c);
            const id = this.props.getId(c);
            const secondary = this.props.getSecondary(c);
            return (
              <ListItem
                button={true}
                onClick={this.onClick(primary, id)}
                key={id}
              >
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  }

  private onClick = (primary: string, id: string) => () => {
    this.props.onChange(primary, id);
  };
}
type SearchSuggestionClassnames = "paper";
const styles: StyleRulesCallback<SearchSuggestionClassnames> = theme => ({
  paper: {
    position: "absolute",
    zIndex: 9999
  }
});

export default withStyles(styles)(AutoComplete);
