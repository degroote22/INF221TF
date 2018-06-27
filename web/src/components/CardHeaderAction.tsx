import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import HistoryManager from "src/singletons/HistoryManager";
import { LinkStyle } from "src/utils/styles";
import { IsRegisteredQuery } from "../config/Queries";
import { IsRegistered } from "../generated/types";

type onPopopverClickType = (event: React.MouseEvent<HTMLElement>) => void;

interface IProps {
  onPopopverClick: onPopopverClickType;
}
const withData = graphql<IProps, IsRegistered.Query, IsRegistered.Variables>(
  IsRegisteredQuery
);

export default withData(({ data, onPopopverClick }) => {
  if (data && data.me && data.me.id && data.logged) {
    return (
      <IconButton onClick={onPopopverClick}>
        <MoreVertIcon color="secondary" />
      </IconButton>
    );
  } else {
    return (
      <Link to={HistoryManager.loginRoute()} style={LinkStyle}>
        <Button color="secondary">Entrar</Button>
      </Link>
    );
  }
});
