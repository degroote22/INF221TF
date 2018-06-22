import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Edit";
import * as React from "react";
import { Link } from "react-router-dom";
import { BLOCK } from "src/utils/constants";
import { AvaliarDisciplina } from "src/utils/routes";

const Fab: React.SFC = props => {
  return (
    <span
      style={{
        bottom: 0,
        padding: BLOCK / 4,
        position: "fixed",
        right: 0
      }}
    >
      <Link to={AvaliarDisciplina}>
        <Button variant="fab" color="secondary">
          <AddIcon />
        </Button>
      </Link>
    </span>
  );
};

export default Fab;
