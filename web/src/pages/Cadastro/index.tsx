import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { Redirect } from "react-router";
import { ComponentBase } from "resub";
import AutoComplete from "src/components/AutoComplete";
import Layout from "src/components/Layout";
import { BLOCK } from "src/utils/constants";
import AuthManager from "../../singletons/AuthManager";
import { Home } from "../../utils/routes";

const initialState = {
  open: false,
  label: "",
  year: "",
  registered: false
};
class Cadastro extends ComponentBase<
  WithStyles<ClassesNames>,
  typeof initialState
> {
  public readonly state = initialState;
  public render() {
    const { classes } = this.props;
    const registered = this.state.registered;

    if (registered) {
      return <Redirect to={Home} />;
    }
    return (
      <Layout title="Cadastro">
        <CardContent className={classes.cardContend}>
          <TextField
            id="code"
            label="Curso"
            fullWidth={true}
            margin="normal"
            value={this.state.label}
            onChange={this.handleChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
          <AutoComplete
            search={this.state.label}
            onChange={this.handleSelect}
            open={this.state.open}
            getPrimary={this.getPrimary as any}
            getSecondary={this.getSecondary as any}
            getId={this.getId as any}
            top={BLOCK * 2.5}
            getResult={this.getResult}
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Ano de ingresso</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleYearChange}
              inputProps={{
                name: "year",
                id: "year-simple"
              }}
            >
              {this.renderYears()}
            </Select>
          </FormControl>
          <span className={classes.paddingTop}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.onConfirm}
            >
              Confirmar
            </Button>
          </span>
        </CardContent>
      </Layout>
    );
  }

  protected _buildState(props: {}, initial: boolean) {
    return {
      ...this.state,
      registered: AuthManager.getRegistered()
    };
  }

  private onConfirm = () => {
    AuthManager.register(this.state.label, this.state.year);
  };

  private handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ year: event.target.value });
  };

  private renderYears = () => {
    return [
      "2018/1",
      "2017/1",
      "2016/1",
      "2015/1",
      "2014/1",
      "2013/1",
      "2012/1"
    ].map(x => {
      return (
        <MenuItem key={x} value={x}>
          {x}
        </MenuItem>
      );
    });
  };

  private onBlur = () => {
    setTimeout(() => {
      this.setState({ open: false });
    }, 1);
  };

  private onFocus = () => {
    this.setState({ open: true });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ label: event.target.value });
  };

  private getResult = (search: string) => {
    return ["Engenharia de Alimentos", "Engenharia Civil"];
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

  private handleSelect = (label: string, id: string) => {
    this.setState({ label });
  };
}

type ClassesNames = "formControl" | "paddingTop" | "cardContend";
const styles: StyleRulesCallback<ClassesNames> = theme => ({
  paddingTop: {
    paddingTop: BLOCK / 2
  },
  formControl: {
    marginTop: BLOCK / 4,
    minWidth: 120
  },
  cardContend: {
    maxWidth: 400,
    display: "flex",
    flexDirection: "column"
  }
});

export default withStyles(styles)(Cadastro);
