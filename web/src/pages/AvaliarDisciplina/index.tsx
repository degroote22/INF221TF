import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { ChildProps, graphql } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import Layout from "src/components/Layout";
import client from "src/config/ApolloClient";
import { WriteReviewMutation } from "src/config/Mutations";
import { UfvClassDetailQuery, UfvClassNameQuery } from "src/config/Queries";
import FormikRadioLine from "src/Formuik/RadioLine";
import { UfvClassName } from "src/generated/types";
import { BLOCK } from "src/utils/constants";
import { FormikCheckbox } from "../../Formuik/CheckBox";
import { FormikSwitch } from "../../Formuik/Switch";
import { FormikTextField } from "../../Formuik/TextField";
import HistoryManager from "../../singletons/HistoryManager";

const descriptionPlaceholder = [
  "Informe o que você achou sobre os métodos de avaliação da disciplina, ",
  "cobrança de presença e quaisquer outros dados relevantes."
].join("");

const initialValues = {
  cod: "",
  useful: "",
  easy: "",
  description: "",
  recommended: false,
  anonymous: false
};

const FiveScaleOptions = [0, 1, 2, 3, 4, 5]
  .map(value => String(value))
  .map(value => ({ value, label: value }));

const Spacing: React.SFC = props => <div style={{ marginTop: BLOCK / 2 }} />;

class AvaliarDisciplinasBase extends React.Component<
  ChildProps<RouteComponentProps<{ id: string }>, UfvClassName.Query> &
    WithStyles<ButtonClassesNames> &
    RouteComponentProps<{ id: string }>
> {
  public render() {
    return (
      <Layout title="Avaliar Disciplina">
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit}
            render={this.renderForm}
          />
        </CardContent>
      </Layout>
    );
  }

  private renderForm = (formikBag: FormikProps<typeof initialValues>) => {
    const { classes } = this.props;
    const remaining = 5000 - formikBag.values.description.length;
    return (
      <Form className={classes.container} noValidate={true} autoComplete="off">
        <TextField
          id="code"
          label="Código da disciplina"
          className={classes.textField}
          fullWidth={true}
          margin="normal"
          disabled={true}
          value={this.getCod()}
        />
        <Spacing />
        <FormikRadioLine
          label="Utilidade"
          name="useful"
          options={FiveScaleOptions}
        />
        <Spacing />

        <FormikRadioLine
          label="Facilidade"
          name="easy"
          options={FiveScaleOptions}
        />
        <FormikTextField
          name="description"
          label="Fale um pouco sobre a disciplina"
          className={classes.textField}
          fullWidth={true}
          multiline={true}
          rows={4}
          margin="normal"
          placeholder={descriptionPlaceholder}
        />
        <FormHelperText>{remaining} caracteres restantes</FormHelperText>
        <Spacing />

        <FormikCheckbox label="Recomendar matéria" name="recommended" />
        <Spacing />

        <FormikSwitch label="Avaliação anônima" name="anonymous" />
        <Spacing />

        <div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={formikBag.isSubmitting}
          >
            Salvar avaliação
          </Button>
        </div>
      </Form>
    );
  };

  private getCod = () => {
    return this.props.data
      ? this.props.data.ufvClass
        ? this.props.data.ufvClass.cod
        : ""
      : "";
  };

  private onSubmit = (values: typeof initialValues) => {
    const finalValues = {
      ...values,
      cod: this.getCod(),
      useful: "U" + values.useful,
      easy: "E" + values.easy
    };

    client
      .mutate({
        mutation: WriteReviewMutation,
        variables: finalValues,
        refetchQueries: [{ query: UfvClassDetailQuery }]
      })
      .then(() => {
        HistoryManager.goToClass(this.props.match.params.id);
      });
  };
}

type ButtonClassesNames = "container" | "textField" | "paddingTop";
const styles: StyleRulesCallback<ButtonClassesNames> = () => ({
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

const withData = graphql<
  RouteComponentProps<{ id: string }>,
  UfvClassName.Query,
  UfvClassName.Variables,
  RouteComponentProps<{ id: string }>
>(UfvClassNameQuery, {
  options: props => ({
    variables: {
      id: props.match.params.id
    }
  })
});

export default withRouter(withData(withStyles(styles)(AvaliarDisciplinasBase)));
