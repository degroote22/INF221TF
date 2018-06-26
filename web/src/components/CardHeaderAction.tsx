import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { LoginGo } from "src/utils/routes";
import { LinkStyle } from "src/utils/styles";
import { LoggedRegisteredQuery } from "../config/Queries";
import { LoggedRegistered } from "../generated/types";

type onPopopverClickType = (event: React.MouseEvent<HTMLElement>) => void;

interface IProps {
  onPopopverClick: onPopopverClickType;
}
const withData = graphql<
  IProps,
  LoggedRegistered.Query,
  LoggedRegistered.Variables
>(LoggedRegisteredQuery);

export default withData(({ data, onPopopverClick }) => {
  if (data && data.registered && data.logged) {
    return (
      <IconButton onClick={onPopopverClick}>
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
});
