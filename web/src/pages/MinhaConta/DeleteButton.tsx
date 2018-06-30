import Button from "@material-ui/core/Button";
import * as React from "react";
import { DeleteAccountMutation } from "src/config/Mutations";
import { IsRegisteredQuery, LocalLoggedQuery } from "src/config/Queries";
import { withDeleteAccount } from "src/generated/types";
import FacebookManager from "src/singletons/FacebookManager";

const enhance = withDeleteAccount(DeleteAccountMutation, {
  options: {
    refetchQueries: [{ query: IsRegisteredQuery }, { query: LocalLoggedQuery }]
  }
});

export default enhance(props => {
  const mutate = async () => {
    await props.mutate();
    FacebookManager.logoff();
  };
  return (
    <Button onClick={mutate} color="primary" autoFocus={true}>
      Confirmar
    </Button>
  );
});
