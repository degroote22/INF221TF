import {
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  StyleRulesCallback,
  withStyles,
  WithStyles
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import Layout from "../../components/Layout";
import UserProfile from "../../components/UserProfile";
import AuthManager from "../../singletons/AuthManager";
import { BLOCK } from "../../utils/constants";

const initialState = {
  open: false
};

class MinhaConta extends React.Component<
  WithStyles<ClassesNames>,
  typeof initialState
> {
  public readonly state = initialState;

  public render() {
    const me = AuthManager.getId();
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
