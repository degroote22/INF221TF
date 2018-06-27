import * as React from "react";
import { DataValue, graphql, MutationFunc } from "react-apollo";
import { IsRegisteredQuery, LocalLoggedQuery } from "src/config/Queries";
import { IsRegistered, Register } from "src/generated/types";
import Presentation from "src/pages/Cadastro/Presentation";
import { RegisterMutation } from "../../config/Mutations";

interface IRenames {
  loggedData?: DataValue<IsRegistered.Query, IsRegistered.Variables>;
  register?: MutationFunc<Register.Mutation, Register.Variables>;
}
const withData = graphql<IRenames, IsRegistered.Query, IsRegistered.Variables>(
  IsRegisteredQuery,
  {
    props: p => ({ ...p, loggedData: p.data })
  }
);

const withMutation = graphql<IRenames, Register.Mutation, Register.Variables>(
  RegisterMutation,
  {
    options: {
      refetchQueries: [
        { query: IsRegisteredQuery },
        { query: LocalLoggedQuery }
      ]
    },
    props: (p: any) => ({ ...p, register: p.mutate })
  } as any
);

export default withData(
  withMutation(props => {
    const loggedData = props.loggedData;
    return (
      <Presentation
        register={props.register}
        registered={Boolean(loggedData && loggedData.me && loggedData.me.id)}
        logged={Boolean(loggedData && loggedData.logged)}
      />
    );
  })
);
