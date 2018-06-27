import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StyleRulesCallback, WithStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { graphql } from "react-apollo";
import { ComponentBase } from "resub";
import Loading from "src/components/Loading";
import { MeIdQuery } from "src/config/Queries";
import { MeId } from "src/generated/types";
import Layout from "../../components/Layout";
import UserProfile from "../../components/UserProfile";
import { BLOCK } from "../../utils/constants";
import DeleteButton from "./DeleteButton";

const initialState = {
  open: false
};
type IProps = WithStyles<ClassesNames> & { id?: string };

class MinhaConta extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;

  public render() {
    const { classes, id } = this.props;
    return (
      <Layout title="Minha Conta">
        <CardContent>
          {id ? <UserProfile id={id} /> : <Loading layout={false} />}
          <Typography
            variant="title"
            className={classes.marginTop}
            id="modal-title"
          >
            Excluir sua conta
          </Typography>
          <Typography variant="subheading" id="simple-modal-description">
            Esta ação não apagará suas avaliações
          </Typography>
          <Button
            className={classes.marginTop}
            onClick={this.handleOpen}
            variant="contained"
            color="secondary"
          >
            Excluir a conta
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Excluir conta"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta ação é irreversível.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancelar
              </Button>
              <DeleteButton />
            </DialogActions>
          </Dialog>
        </CardContent>
      </Layout>
    );
  }
  private handleClose = () => {
    this.setState({ open: false });
  };

  private handleOpen = () => {
    this.setState({ open: true });
  };
}

type ClassesNames = "marginTop";
const styles: StyleRulesCallback<ClassesNames> = theme => ({
  marginTop: {
    marginTop: BLOCK / 4
  }
});

const Presentation = withStyles(styles)(MinhaConta);

const withData = graphql<{}, MeId.Query, MeId.Variables>(MeIdQuery);

export default withData(props => {
  const id = props.data
    ? props.data.me
      ? props.data.me.id
      : undefined
    : undefined;
  return <Presentation id={id} />;
});
