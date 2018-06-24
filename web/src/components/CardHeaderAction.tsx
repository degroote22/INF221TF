import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { Link } from "react-router-dom";
import { ComponentBase } from "resub";
import AuthManager from "src/singletons/AuthManager";
import { LoginGo } from "src/utils/routes";
import { LinkStyle } from "src/utils/styles";

type onPopopverClickType = (event: React.MouseEvent<HTMLElement>) => void;

const initialState = {
  logged: false
};
interface IProps extends React.Props<{}> {
  onPopopverClick: onPopopverClickType;
}
class CardHeaderAction extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;
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

  protected _buildState(
    props: IProps,
    initialBuild: boolean
  ): typeof initialState {
    return {
      ...initialState,
      logged: AuthManager.getLogged()
    };
  }
}

export default CardHeaderAction;
