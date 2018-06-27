import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Loading from "src/components/Loading";
import { ClassesRanks, Department, ListByKind } from "src/generated/types";
import { ListByKindQuery } from "../../config/Queries";
import { DisciplinaGo } from "../../utils/routes";
import { LinkStyle } from "../../utils/styles";

interface IProps {
  rank: ClassesRanks;
  optative: boolean;
  department: Department | "";
}

const getSecondaryText = (c: ListByKind.ListClasses, rank: ClassesRanks) => {
  if (rank === "Easy") {
    return "Facilidade média: " + c.easy.toFixed(2);
  }
  if (rank === "Recommended") {
    return "Recomendado por: " + c.recommended + " alunos";
  }
  if (rank === "Useful") {
    return "Utilidade média: " + c.useful.toFixed(2);
  }

  throw Error("Não implementado");
};

const ListItemWrapped: React.SFC<{
  c: ListByKind.ListClasses;
  rank: ClassesRanks;
}> = props => {
  const { c, rank } = props;
  const secondary = getSecondaryText(c, rank);

  return (
    <Link to={DisciplinaGo(c.id)} key={c.id} style={LinkStyle}>
      <ListItem button={true}>
        <ListItemText primary={c.cod + " - " + c.name} secondary={secondary} />
      </ListItem>
    </Link>
  );
};

const withData = graphql<IProps, ListByKind.Query, ListByKind.Variables>(
  ListByKindQuery,
  {
    options: props => ({
      variables: {
        sort: props.rank,
        optional: props.optative === true ? true : null,
        department:
          props.department === "" ? null : (props.department as Department)
      }
    })
  }
);

export default withData(props => {
  if (!props.data || props.data.loading || !props.data.listClasses) {
    return <Loading layout={false} />;
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <List component="nav" style={{ padding: 0 }}>
        {props.data.listClasses.map(c => {
          return <ListItemWrapped key={c.id} c={c} rank={props.rank} />;
        })}
      </List>
    </div>
  );
});
