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
import { ComponentBase } from "resub";
import Layout from "../../components/Layout";
import UserProfile from "../../components/UserProfile";
import AuthManager from "../../singletons/AuthManager";
import { BLOCK } from "../../utils/constants";

const initialState = {
  open: false,
  me: ""
};
type IProps = WithStyles<ClassesNames>;
class MinhaConta extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;

  public render() {
    const me = this.state.me;
    const { classes } = this.props;
    return (
      <Layout title="Minha Conta">
        <CardContent>
          <UserProfile id={me} />
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
              <Button
                onClick={this.handleClose}
                color="primary"
                autoFocus={true}
              >
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Layout>
    );
  }

  protected _buildState(props: IProps, initial: boolean) {
    return {
      ...this.state,
      me: AuthManager.getId()
    };
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

export default withStyles(styles)(MinhaConta);
