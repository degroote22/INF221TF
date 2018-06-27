import Button from "@material-ui/core/Button";
import * as React from "react";
import { graphql } from "react-apollo";
import { DeleteAccountMutation } from "src/config/Mutations";
import { IsRegisteredQuery, LocalLoggedQuery } from "src/config/Queries";
import { DeleteAccount } from "src/generated/types";
import FacebookManager from "src/singletons/FacebookManager";

const withData = graphql<{}, DeleteAccount.Mutation, DeleteAccount.Variables>(
  DeleteAccountMutation,
  {
    options: {
      refetchQueries: [
        { query: IsRegisteredQuery },
        { query: LocalLoggedQuery }
      ]
    }
  }
);

export default withData(props => {
  const mutate = () => {
    if (props.mutate) {
      props.mutate().then(x => FacebookManager.logoff());
    }
  };
  return (
    <Button onClick={mutate} color="primary" autoFocus={true}>
      Confirmar
    </Button>
  );
});
