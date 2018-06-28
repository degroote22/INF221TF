import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Face from "@material-ui/icons/Face";
import School from "@material-ui/icons/School";
import * as React from "react";
import { DataProps, graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Loading from "src/components/Loading";
import { SearchHomeQuery } from "src/config/Queries";
import { SearchHome } from "src/generated/types";
import Tabs from "src/pages/HomePage/Tabs";
import HistoryManager from "src/singletons/HistoryManager";
import { LinkStyle } from "src/utils/styles";
interface IRename {
  result: DataProps<SearchHome.Query, SearchHome.Variables>["data"];
  search: string;
  inputFocused: boolean;
}
const getList = (
  result: DataProps<SearchHome.Query, SearchHome.Variables>["data"]
) => {
  if (!result || result.loading || !result.searchAll) {
    return [];
  }
  const list: SearchHome.Query["searchAll"] = result.searchAll;
  return list;
};
class SearchSuggestions extends React.Component<IRename> {
  public render() {
    const list = getList(this.props.result);
    return (
      <React.Fragment>
        <Paper
          style={{
            position: "relative",
            left: 0,
            right: 0
          }}
          square={false}
          elevation={0}
        >
          {this.props.result.loading && <Loading layout={false} />}
          <Collapse in={this.props.inputFocused && list.length !== 0}>
            {list.map(r => {
              return this.renderResult(r);
            })}
          </Collapse>

          <Collapse
            in={
              !this.props.result.loading &&
              this.props.inputFocused &&
              this.props.search !== "" &&
              list.length === 0
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
  }

  private renderResult = (result: SearchHome.SearchAll) => {
    const ufvClass: SearchHome.UfvClassInlineFragment["__typename"] =
      "UfvClass";
    if (result.__typename === ufvClass) {
      return (
        <Link
          key={"c" + result.id}
          to={HistoryManager.disciplinaRoute(result.id)}
          style={LinkStyle}
        >
          <ListItem key={result.cod} button={true}>
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary={result.cod} secondary={result.name} />
          </ListItem>
        </Link>
      );
    }
    return (
      <Link
        key={"u" + result.id}
        to={HistoryManager.usuarioRoute(result.id)}
        style={LinkStyle}
      >
        <ListItem button={true}>
          <ListItemIcon>
            <Face />
          </ListItemIcon>
          <ListItemText primary={result.name} />
        </ListItem>
      </Link>
    );
  };
}

const withData = graphql<
  {
    search: string;
    inputFocused: boolean;
  },
  SearchHome.Query,
  SearchHome.Variables,
  IRename
>(SearchHomeQuery, {
  options: (p: any) => ({ delay: true, variables: { value: p.search } }),
  props: (p: any) => ({ ...p, result: p.data })
});

export default withData(SearchSuggestions);
