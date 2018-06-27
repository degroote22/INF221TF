import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { MutationFunc } from "react-apollo";
import { Redirect } from "react-router";
import Layout from "src/components/Layout";
import { FormikAutoCompleteSelect } from "src/Formuik/AutocompleteSelect";
import { Register } from "src/generated/types";
import { BLOCK } from "src/utils/constants";
import { Home } from "src/utils/routes";
import UfvCourses from "src/utils/UfvCourses";
import UfvYears from "src/utils/UfvYears";
import HistoryManager from "../../singletons/HistoryManager";

const initialValues = {
  course: "",
  year: ""
};
class Cadastro extends React.Component<
  {
    registered: boolean;
    logged: boolean;
    register?: MutationFunc<Register.Mutation, Register.Variables>;
  } & WithStyles<ClassesNames>
> {
  public render() {
    const { classes, registered, logged } = this.props;
    if (!logged) {
      return <Redirect to={Home} />;
    }
    if (registered) {
      return <Redirect to={HistoryManager.lastRoute()} />;
    }
    return (
      <Layout title="Cadastro">
        <CardContent className={classes.cardContend}>
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
    return (
      <Form className={classes.container} noValidate={true} autoComplete="off">
        <FormikAutoCompleteSelect
          label="Curso"
          name="course"
          options={UfvCourses}
        />
        <div className={classes.marginTop} />
        <FormikAutoCompleteSelect
          label="Ano de ingresso"
          name="year"
          options={UfvYears}
        />

        <span className={classes.paddingTop}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={formikBag.isSubmitting}
          >
            Confirmar
          </Button>
        </span>
      </Form>
    );
  };
  private onSubmit = (values: typeof initialValues) => {
    if (this.props.register) {
      this.props.register({ variables: values } as any).then(() => {
        HistoryManager.clearLoginUrl();
      });
    }
  };
}

type ClassesNames = "paddingTop" | "marginTop" | "cardContend" | "container";

const styles: StyleRulesCallback<ClassesNames> = () => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 120,

    flexDirection: "column"
  },
  paddingTop: {
    paddingTop: BLOCK / 2
  },
  marginTop: {
    marginTop: BLOCK / 4
  },
  cardContend: {
    maxWidth: 400,
    display: "flex",
    flexDirection: "column"
  }
});

export default withStyles(styles)(Cadastro);
