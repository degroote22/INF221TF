import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Layout from "src/components/Layout";
import SearchSuggestion from "src/pages/AvaliarDisciplina/SearchSuggestion";
import { BLOCK } from "src/utils/constants";
import ClassManager from "../../singletons/ClassManager";
import SelectFiveScale, { ISelectFiveScaleValues } from "./SelectFiveScale";

const descriptionPlaceholder =
  "Informe o que você achou sobre os métodos de avaliação da disciplina, \
cobrança de presença e quaisquer outros dados relevantes.";

const initialState = {
  cod: "",
  codFocus: false
};

const getCod = (id: string) => {
  if (!id) {
    return "";
  }
  const disciplina = ClassManager.getClass(id);

  return disciplina.cod;
};

class AvaliarDisciplinasBase extends React.Component<
  WithStyles<ButtonClassesNames> & RouteComponentProps<{ id: string }>,
  typeof initialState
> {
  public readonly state = {
    ...initialState,
    cod: getCod(this.props.match.params.id) || ""
  };
  public render() {
    const { classes } = this.props;

    return (
      <Layout title="Avaliar Disciplina">
        <CardContent>
          <form
            className={classes.container}
            noValidate={true}
            autoComplete="off"
          >
            <TextField
              id="code"
              label="Código da disciplina"
              className={classes.textField}
              fullWidth={true}
              margin="normal"
              value={this.state.cod}
              onChange={this.handleCodChange}
              onBlur={this.onCodBlur}
              onFocus={this.onCodFocus}
            />
            <SearchSuggestion
              search={this.state.cod}
              onChange={this.handleCodSelect}
              open={this.state.codFocus}
            />
            <FormControl className={classes.paddingTop}>
              <FormLabel component="legend">Utilidade</FormLabel>
              <SelectFiveScale selected="5" onChange={this.onChangeUtil} />
            </FormControl>
            <FormControl className={classes.paddingTop}>
              <FormLabel component="legend">Facilidade</FormLabel>
              <SelectFiveScale selected="1" onChange={this.onChangeUtil} />
            </FormControl>
            <TextField
              id="description"
              label="Fale um pouco sobre a disciplina"
              className={classes.textField}
              fullWidth={true}
              multiline={true}
              rows={4}
              margin="normal"
              placeholder={descriptionPlaceholder}
            />
            <FormHelperText>{5000} caracteres restantes</FormHelperText>
            <FormControlLabel
              className={classes.paddingTop}
              control={
                <Checkbox
                  checked={false}
                  onChange={this.onChangeSwitch}
                  value="gilad"
                  color="primary"
                />
              }
              label="Recomendar matéria"
            />
            <FormControlLabel
              className={classes.paddingTop}
              control={
                <Switch
                  checked={true}
                  onChange={this.onChangeSwitch}
                  value="gilad"
                  color="primary"
                />
              }
              label="Avaliação anônima"
            />
            <span className={classes.paddingTop}>
              <Button variant="contained" color="secondary">
                Salvar avaliação
              </Button>
            </span>
          </form>
        </CardContent>
      </Layout>
    );
  }

  private handleCodSelect = (cod: string) => {
    this.setState({ cod });
    this.onCodBlur();
  };

  private handleCodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ cod: event.target.value });
  };

  private onCodBlur = () => {
    setTimeout(() => {
      this.setState({ codFocus: false });
    }, 1);
  };

  private onCodFocus = () => {
    this.setState({ codFocus: true });
  };

  private onChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // tslint:disable-next-line:no-console
    console.log(value);
  };

  private onChangeUtil = (scale: ISelectFiveScaleValues) => {
    // tslint:disable-next-line:no-console
    console.log(scale);
  };
}

type ButtonClassesNames = "container" | "textField" | "paddingTop";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  paddingTop: {
    paddingTop: BLOCK / 2
  },
  textField: {
    maxWidth: 400
  }
});

export default withStyles(styles)(withRouter(AvaliarDisciplinasBase));
