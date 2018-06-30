import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Face from "@material-ui/icons/Face";
import School from "@material-ui/icons/School";
import * as React from "react";
import { Link } from "react-router-dom";
import Loading from "src/components/Loading";
import { SearchHomeQuery } from "src/config/Queries";
import {
  SearchHome,
  withSearchHome,
  withSearchHomeDataValue
} from "src/generated/types";
import Tabs from "src/pages/HomePage/Tabs";
import HistoryManager from "src/singletons/HistoryManager";
import { LinkStyle } from "src/utils/styles";

interface IProps extends IExternalProps, IWithDataProps {}

interface IExternalProps {
  search: string;
  inputFocused: boolean;
}

interface IWithDataProps {
  result: withSearchHomeDataValue;
}

const withData = withSearchHome<IExternalProps, IWithDataProps>(
  SearchHomeQuery,
  {
    options: p => ({ delay: true, variables: { value: p.search } }),
    props: p => ({ result: p.data })
  }
);

const getList = (result: withSearchHomeDataValue) => {
  if (!result || result.loading || !result.searchAll) {
    return [];
  }
  return result.searchAll;
};
class SearchSuggestions extends React.Component<IProps> {
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

export default withData(SearchSuggestions);
