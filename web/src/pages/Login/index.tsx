import * as React from "react";
import { graphql } from "react-apollo";
import { Redirect } from "react-router";
import Layout from "src/components/Layout";
import { LocalLoggedQuery } from "src/config/Queries";
import { LocalLogged } from "src/generated/types";
import { BLOCK } from "src/utils/constants";
import { Cadastro } from "src/utils/routes";
import FacebookManager from "../../singletons/FacebookManager";

const withData = graphql<{}, LocalLogged.Query, LocalLogged.Variables>(
  LocalLoggedQuery
);

const Login = withData(props => {
  if (props.data && props.data.logged) {
    return <Redirect to={Cadastro} />;
  }
  return (
    <Layout title="Entre na sua conta">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          paddingTop: BLOCK
        }}
      >
        <a onClick={FacebookManager.login}>
          <img style={{ maxWidth: 250, cursor: "pointer" }} src="/fb.png" />
        </a>
      </div>
    </Layout>
  );
});

export default Login;
