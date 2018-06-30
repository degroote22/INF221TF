import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { Form, Formik, FormikErrors, FormikProps } from "formik";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Layout from "src/components/Layout";
import Loading from "src/components/Loading";
import client from "src/config/ApolloClient";
import {
  UpdateReviewMutation,
  WriteReviewMutation
} from "src/config/Mutations";
import {
  ReviewDataToEditQuery,
  UfvClassDetailQuery,
  UfvClassNameQuery
} from "src/config/Queries";
import FormikRadioLine from "src/Formuik/RadioLine";
import {
  ReviewDataToEdit,
  ReviewEasy,
  ReviewUseful,
  UpdateReview,
  withUfvClassName,
  withUfvClassNameChildProps,
  WriteReview
} from "src/generated/types";
import { BLOCK } from "src/utils/constants";
import { AvaliarAction } from "src/utils/types";
import { FormikCheckbox } from "../../Formuik/CheckBox";
import { FormikSwitch } from "../../Formuik/Switch";
import { FormikTextField } from "../../Formuik/TextField";
import HistoryManager from "../../singletons/HistoryManager";

const descriptionPlaceholder = [
  "Informe o que você achou sobre os métodos de avaliação da disciplina, ",
  "cobrança de presença e quaisquer outros dados relevantes."
].join("");

const initialValues = {
  teacher: "",
  useful: "",
  easy: "",
  description: "",
  recommended: false,
  anonymous: false
};

const initialState = {
  cod: "",
  classId: "",
  values: undefined as typeof initialValues | undefined
};

const FiveScaleOptions = [0, 1, 2, 3, 4, 5]
  .map(value => String(value))
  .map(value => ({ value, label: value }));

const Spacing: React.SFC = props => <div style={{ marginTop: BLOCK / 2 }} />;

interface IProps {
  action: AvaliarAction;
}
class AvaliarDisciplinasBase extends React.Component<
  IProps &
    RouteComponentProps<{ id: string }> &
    WithStyles<ButtonClassesNames> &
    withUfvClassNameChildProps,
  typeof initialState
> {
  public readonly state = initialState;

  public async componentDidMount() {
    const response = await client.query<ReviewDataToEdit.Query>({
      query: ReviewDataToEditQuery,
      variables: { id: this.props.match.params.id }
    });

    const review = response.data.review;
    if (review) {
      const {
        easy,
        useful,
        recommended,
        description,
        anonymous,
        teacher
      } = review;
      const values = {
        // Easy e useful sao enum do tipo UX onde X é o numero.
        // Isso é recebido como string e aqui é convertido só para X para exibição.
        easy: easy[1],
        useful: useful[1],
        teacher,
        anonymous,
        recommended,
        description
      };
      this.setState({
        values,
        cod: review.classReviewed.cod,
        classId: review.classReviewed.id
      });
    }
  }

  public render() {
    const hasData = !!this.state.values;

    const shouldMount =
      this.props.action === AvaliarAction.edit ? hasData : true;

    const init =
      this.props.action === AvaliarAction.edit
        ? this.state.values // Isso sempre vai dar verdade na hora de mandar msm
          ? this.state.values
          : initialValues
        : initialValues;

    return (
      <Layout title="Avaliar Disciplina">
        <CardContent>
          {shouldMount ? (
            <Formik
              isInitialValid={this.props.action === AvaliarAction.edit}
              validate={this.validate}
              initialValues={init}
              onSubmit={this.onSubmit}
              render={this.renderForm}
            />
          ) : (
            <Loading layout={false} />
          )}
        </CardContent>
      </Layout>
    );
  }

  private validate = (
    values: typeof initialValues
  ): FormikErrors<typeof initialValues> => {
    const errors: FormikErrors<typeof initialValues> = {};

    if (values.teacher === "") {
      errors.teacher = "Não pode estar em branco";
    }

    if (values.useful === "") {
      errors.useful = "Precisa estar marcado";
    }

    if (values.easy === "") {
      errors.easy = "Precisa estar marcado";
    }

    if (values.description === "") {
      errors.description = "Não pode estar em branco";
    }

    return errors;
  };

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
        <FormikTextField
          name="teacher"
          label="Nome do professor"
          className={classes.textField}
          fullWidth={true}
          margin="normal"
          placeholder={descriptionPlaceholder}
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
            disabled={formikBag.isSubmitting || !formikBag.isValid}
          >
            Salvar avaliação
          </Button>
        </div>
      </Form>
    );
  };

  private getCod = () => {
    if (this.props.action === AvaliarAction.edit) {
      return this.state.cod;
    }
    return this.props.data.ufvClass ? this.props.data.ufvClass.cod : "";
  };

  private onSubmit = (values: typeof initialValues) => {
    const finalValues: WriteReview.Variables = {
      ...values,
      cod: this.getCod(),
      useful: ("U" + values.useful) as ReviewUseful,
      easy: ("E" + values.easy) as ReviewEasy
    };

    if (this.props.action === AvaliarAction.edit) {
      const vars: UpdateReview.Variables = {
        ...finalValues,
        id: this.props.match.params.id
      };

      client
        .mutate({
          mutation: UpdateReviewMutation,
          variables: vars,
          refetchQueries: [
            {
              query: UfvClassDetailQuery,
              variables: { id: this.state.classId }
            },
            {
              query: ReviewDataToEditQuery,
              variables: { id: this.props.match.params.id }
            }
          ]
        })
        .then(() => {
          HistoryManager.goToClass(this.state.classId);
        });
    } else {
      client
        .mutate({
          mutation: WriteReviewMutation,
          variables: finalValues,
          refetchQueries: [
            {
              query: UfvClassDetailQuery,
              variables: { id: this.props.match.params.id }
            }
          ]
        })
        .then(() => {
          HistoryManager.goToClass(this.props.match.params.id);
        });
    }
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

const withData = withUfvClassName<RouteComponentProps<{ id: string }> & IProps>(
  UfvClassNameQuery,
  {
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }
);

export default withRouter(withData(withStyles(styles)(AvaliarDisciplinasBase)));
