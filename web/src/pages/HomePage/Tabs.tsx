import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import {
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Mood from "@material-ui/icons/Mood";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Whatshot from "@material-ui/icons/Whatshot";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { FormikAutoCompleteSelect } from "src/Formuik/AutocompleteSelect";
import { FormikSwitch } from "src/Formuik/Switch";
import { ClassesRanks, Department } from "src/generated/types";
import UfvDeptos from "src/pages/HomePage/UfvDeptos";
import TabsList from "./TabsList";

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

const initialValues = {
  optative: false,
  department: ""
};

const initialState = {
  ...initialValues,
  rank: "Useful" as ClassesRanks
};

type IProps = WithStyles<ButtonClassesNames>;
class HomepageTabs extends React.Component<IProps, typeof initialState> {
  public readonly state = initialState;
  private formik: Formik | undefined = undefined;
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
            <Tab label="Uteis" value={"Useful"} icon={<Mood />} />
            <Tab label="Fáceis" value={"Easy"} icon={<ThumbUp />} />
            <Tab
              label="Recomendadas"
              value={"Recommended"}
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
            <Formik
              ref={this.setFormikRef}
              initialValues={initialValues}
              onSubmit={this.onSubmit}
              render={this.renderForm}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <TabsList
          rank={this.state.rank}
          optative={this.state.optative}
          department={this.state.department as Department}
        />
      </React.Fragment>
    );
  }

  private setFormikRef = (ref: any) => {
    this.formik = ref;
  };

  private renderForm = (formikBag: FormikProps<typeof initialValues>) => {
    return (
      <Form noValidate={true} autoComplete="off">
        <FormikAutoCompleteSelect
          fullWidth={true}
          label="Departamento"
          name="department"
          options={UfvDeptos}
        />
        <div style={{ marginTop: 16 }} />
        <FormikSwitch name="optative" label="Somente optativas" />
        <div style={{ marginTop: 32 }} />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={formikBag.isSubmitting}
        >
          Confirmar
        </Button>
      </Form>
    );
  };

  private onSubmit = (values: typeof initialValues) => {
    this.setState(values);
    if (this.formik) {
      this.formik.resetForm(values);
    }
  };

  private handleChange = (ev: React.ChangeEvent<{}>, rank: ClassesRanks) => {
    this.setState({ rank });
  };
}

export default withStyles(styles)(HomepageTabs);
