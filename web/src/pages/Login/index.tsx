import * as React from "react";
import { Redirect } from "react-router";
import Layout from "src/components/Layout";
import { LocalLoggedQuery } from "src/config/Queries";
import { withLocalLogged } from "src/generated/types";
import { BLOCK } from "src/utils/constants";
import FacebookManager from "../../singletons/FacebookManager";
import HistoryManager from "../../singletons/HistoryManager";

const Login = withLocalLogged(LocalLoggedQuery)(props => {
  if (Boolean(props.data.logged)) {
    return <Redirect to={HistoryManager.cadastroRoute()} />;
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
