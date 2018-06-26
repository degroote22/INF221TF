import * as React from "react";
import { graphql } from "react-apollo";
import { LoggedRegisteredQuery } from "src/config/Queries";
import { LoggedRegistered } from "src/generated/types";
import Presentation from "src/pages/Cadastro/Presentation";
const withData = graphql<
  {},
  LoggedRegistered.Query,
  LoggedRegistered.Variables
>(LoggedRegisteredQuery);

export default withData(({ data }) => {
  return (
    <Presentation
      registered={Boolean(data && data.registered)}
      logged={Boolean(data && data.logged)}
    />
  );
});
