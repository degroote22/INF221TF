import * as React from "react";
import { RegisterMutation } from "src/config/Mutations";
import { IsRegisteredQuery, LocalLoggedQuery } from "src/config/Queries";
import {
  withIsRegistered,
  withIsRegisteredDataValue,
  withRegister,
  withRegisterMutationFunc
} from "src/generated/types";
import Presentation from "src/pages/Cadastro/Presentation";

interface IWithRegisterMutation {
  register: withRegisterMutationFunc;
}

const withData = withIsRegistered<
  IWithRegisterMutation,
  {
    loggedData: withIsRegisteredDataValue;
  }
>(IsRegisteredQuery, {
  props: p => ({ loggedData: p.data })
});

const withMutation = withRegister<{}, IWithRegisterMutation>(RegisterMutation, {
  options: {
    refetchQueries: [{ query: IsRegisteredQuery }, { query: LocalLoggedQuery }]
  },
  props: p => ({ register: p.mutate })
});

export default withMutation(
  withData(props => {
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
