import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  StyleRulesCallback,
  Switch,
  TextField,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Mood from "@material-ui/icons/Mood";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Whatshot from "@material-ui/icons/Whatshot";
import * as React from "react";
import { Link } from "react-router-dom";
import { IClassType, RankTypes } from "src/utils/types";
import AutoComplete from "../../components/AutoComplete";
import ClassManager from "../../singletons/ClassManager";
import { BLOCK } from "../../utils/constants";
import { DisciplinaGo } from "../../utils/routes";
import { LinkStyle } from "../../utils/styles";

type ButtonClassesNames = "root" | "heading" | "textField" | "options";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  options: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    maxWidth: 400
  }
});

const initialState = {
  rank: RankTypes.useful,
  dept: "",
  deptOpen: false
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
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={this.props.classes.heading}>
              Opções de filtragem
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.options}>
            <TextField
              id="code"
              label="Departamento"
              className={this.props.classes.textField}
              fullWidth={true}
              margin="normal"
              value={this.state.dept}
              onChange={this.handleDeptChange}
              onBlur={this.onDeptBlur}
              onFocus={this.onDeptFocus}
            />

            <AutoComplete
              search={this.state.dept}
              top={BLOCK * 2}
              onChange={this.handleDeptSelect}
              open={this.state.deptOpen}
              getPrimary={this.getPrimary as any}
              getSecondary={this.getSecondary as any}
              getId={this.getId as any}
              getResult={this.getResult}
            />

            <FormControlLabel
              control={<Switch checked={false} value="gilad" color="primary" />}
              label="Somente optativas"
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {this.renderList()}
      </React.Fragment>
    );
  }

  private onDeptBlur = () => {
    setTimeout(() => {
      this.setState({ deptOpen: false });
    }, 1);
  };

  private onDeptFocus = () => {
    this.setState({ deptOpen: true });
  };

  private handleDeptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dept: event.target.value });
  };

  private getResult = (search: string) => {
    return ["DPI", "DEL"];
  };

  private getId = (item: string) => {
    return item;
  };

  private getSecondary = (item: string) => {
    return "";
  };

  private getPrimary = (item: string) => {
    return item;
  };

  private handleDeptSelect = (dept: string) => {
    this.setState({ dept });
  };

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
