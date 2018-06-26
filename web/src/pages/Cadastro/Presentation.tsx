import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { Redirect } from "react-router";
import Layout from "src/components/Layout";
import { FormikAutoCompleteSelect } from "src/Formuik/AutocompleteSelect";
import UfvCourses from "src/pages/Cadastro/UfvCourses";
import UfvYears from "src/pages/Cadastro/UfvYears";
import { BLOCK } from "src/utils/constants";
import { Home, Login } from "../../utils/routes";

const initialValues = {
  course: "",
  year: ""
};
class Cadastro extends React.Component<
  { registered: boolean; logged: boolean } & WithStyles<ClassesNames>
> {
  public render() {
    const { classes, registered, logged } = this.props;
    if (!logged) {
      return <Redirect to={Login} />;
    }
    if (registered) {
      return <Redirect to={Home} />;
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
    return alert(JSON.stringify(values));
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
