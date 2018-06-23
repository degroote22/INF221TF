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
import ClassManager from "../../singletons/ClassManager";
import { BLOCK } from "../../utils/constants";

class SearchSuggestion extends React.Component<
  WithStyles<SearchSuggestionClassnames> & {
    search: string;
    onChange: (cod: string) => void;
    open: boolean;
  }
> {
  public render() {
    const { search, classes, open } = this.props;
    if (!open || search === "") {
      return null;
    }
    const result = ClassManager.getClasses(search);

    return (
      <Paper className={classes.paper} square={false} elevation={1}>
        <List component="nav" style={{ padding: 0 }}>
          {result.map(c => {
            return (
              <ListItem
                button={true}
                onClick={this.onClick(c.item.cod)}
                key={c.item.id}
              >
                <ListItemText primary={c.item.cod} secondary={c.item.name} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    );
  }

  private onClick = (cod: string) => () => {
    this.props.onChange(cod);
  };
}
type SearchSuggestionClassnames = "paper";
const styles: StyleRulesCallback<SearchSuggestionClassnames> = theme => ({
  paper: {
    position: "absolute",
    zIndex: 9999,
    top: BLOCK * 2.5
  }
});

export default withStyles(styles)(SearchSuggestion);
