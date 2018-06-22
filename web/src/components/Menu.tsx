import { Divider } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import * as React from "react";
import { Link } from "react-router-dom";
import { Home, Logoff, MinhaConta } from "../utils/routes";
import { LinkStyle } from "../utils/styles";

const options = [
  { label: "Minha Conta", to: MinhaConta },
  { label: "Minhas Reações", to: Home },
  { label: "Minhas Avaliações", to: Home }
];

class CommonMenu extends React.Component<{
  onClose: () => void;
  anchorEl: HTMLElement | undefined;
}> {
  public render() {
    return (
      <Menu
        open={Boolean(this.props.anchorEl)}
        anchorEl={this.props.anchorEl}
        onClose={this.props.onClose}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
      >
        {options.map(option => (
          <Link to={option.to} key={option.label} style={LinkStyle}>
            <MenuItem onClick={this.props.onClose}>{option.label}</MenuItem>
          </Link>
        ))}
        <Divider />
        <Link to={Logoff} style={LinkStyle}>
          <MenuItem onClick={this.props.onClose}>Sair da conta</MenuItem>
        </Link>
      </Menu>
    );
  }
}

export default CommonMenu;
