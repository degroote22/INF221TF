import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { Link } from "react-router-dom";
import AuthManager from "src/singletons/AuthManager";
import { LoginGo } from "src/utils/routes";
import { LinkStyle } from "src/utils/styles";

type onPopopverClickType = (event: React.MouseEvent<HTMLElement>) => void;

const initialState = {
  logged: false
};

class CardHeaderAction extends React.Component<
  {
    onPopopverClick: onPopopverClickType;
  },
  typeof initialState
> {
  public readonly state = initialState;
  private unsubscribeToLogged!: (() => void | undefined);

  public componentDidMount() {
    const cb = (logged: boolean) => this.setState({ logged });
    this.unsubscribeToLogged = AuthManager.subscribeToLogged(cb);
  }

  public componentWillUnmount() {
    if (this.unsubscribeToLogged) {
      this.unsubscribeToLogged();
    }
  }

  public render() {
    if (this.state.logged) {
      return (
        <IconButton onClick={this.props.onPopopverClick}>
          <MoreVertIcon color="secondary" />
        </IconButton>
      );
    } else {
      return (
        <Link to={LoginGo()} style={LinkStyle}>
          <Button color="secondary">Entrar</Button>
        </Link>
      );
    }
  }
}

export default CardHeaderAction;
