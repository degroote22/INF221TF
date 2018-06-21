import * as React from "react";
import Layout from "src/components/Layout";
import { BLOCK } from "src/utils/constants";
import AuthManager from "../../singletons/AuthManager";

const Login: React.SFC = props => {
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
        <a onClick={AuthManager.login}>
          <img style={{ maxWidth: 250, cursor: "pointer" }} src="./fb.png" />
        </a>
      </div>
    </Layout>
  );
};

export default Login;
