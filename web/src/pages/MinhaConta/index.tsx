import Typography from "@material-ui/core/Typography";
import * as React from "react";
import Layout from "../../components/Layout";
import { BLOCK } from "../../utils/constants";

const MinhaConta: React.SFC = () => (
  <Layout title="Minha Conta">
    <div
      style={{
        padding: BLOCK / 4
      }}
    >
      <Typography variant="title" id="modal-title">
        Text in a modal
      </Typography>
      <Typography variant="subheading" id="simple-modal-description">
        Duis mollis, est non commodo luctus.
      </Typography>
    </div>
  </Layout>
);

export default MinhaConta;
