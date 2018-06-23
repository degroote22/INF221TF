import {
  List,
  ListItem,
  ListItemText,
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Mood from "@material-ui/icons/Mood";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Whatshot from "@material-ui/icons/Whatshot";
import * as React from "react";
import { Link } from "react-router-dom";
import { IClassType, RankTypes } from "src/utils/types";
import ClassManager from "../../singletons/ClassManager";
import { DisciplinaGo } from "../../utils/routes";
import { LinkStyle } from "../../utils/styles";

type ButtonClassesNames = "root";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: "100%"
  }
});

const initialState = {
  rank: RankTypes.useful
};

class HomepageTabs extends React.Component<
  WithStyles<ButtonClassesNames>,
  typeof initialState
> {
  public readonly state = initialState;
  public render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default" elevation={1}>
          <Tabs
            value={this.state.rank}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth={true}
            centered={true}
            className={this.props.classes.root}
          >
            <Tab label="Uteis" value={RankTypes.useful} icon={<Mood />} />
            <Tab label="Fáceis" value={RankTypes.easy} icon={<ThumbUp />} />
            <Tab
              label="Recomendadas"
              value={RankTypes.recommended}
              icon={<Whatshot />}
            />
          </Tabs>
        </AppBar>
        {this.renderList()}
      </React.Fragment>
    );
  }

  private renderList = () => {
    return (
      <div style={{ overflow: "hidden" }}>
        <List component="nav" style={{ padding: 0 }}>
          {ClassManager.getClassesRanked(this.state.rank).map(c => {
            return this.renderListItem(c, this.state.rank);
          })}
        </List>
      </div>
    );
  };

  private getSecondaryText = (c: IClassType, rank: RankTypes) => {
    if (rank === RankTypes.easy) {
      return "Facilidade média: " + c.easy.toFixed(2);
    }
    if (rank === RankTypes.recommended) {
      return "Recomendado por: " + c.recommended + " alunos";
    }
    if (rank === RankTypes.useful) {
      return "Utilidade média: " + c.useful.toFixed(2);
    }

    throw Error("Não implementado");
  };

  private renderListItem = (c: IClassType, rank: RankTypes) => {
    const secondary = this.getSecondaryText(c, rank);

    return (
      <Link to={DisciplinaGo(c.id)} key={c.id} style={LinkStyle}>
        <ListItem button={true}>
          <ListItemText
            primary={c.cod + " - " + c.name}
            secondary={secondary}
          />
        </ListItem>
      </Link>
    );
  };

  private handleChange = (event: React.ChangeEvent<{}>, rank: RankTypes) => {
    this.setState({ rank });
  };
}

export default withStyles(styles)(HomepageTabs);
