import { CardContent } from "@material-ui/core";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "src/components/Layout";
import Review from "src/components/Review";
import ReviewManager from "src/singletons/ReviewManager";
import UserProfile from "../../components/UserProfile";

const Usuario: React.SFC<
  WithStyles<UsuarioClassesNames> & RouteComponentProps<{ id: string }>
> = props => {
  const reviews = ReviewManager.getUserReviews(props.match.params.id);

  return (
    <Layout title={"Perfil do usuário"}>
      <CardContent>
        <UserProfile id={props.match.params.id} />
        {reviews.map(r => <Review review={r} position="other" key={r.id} />)}
      </CardContent>
    </Layout>
  );
};

type UsuarioClassesNames = "base";
const styles: StyleRulesCallback<UsuarioClassesNames> = theme => ({
  base: {}
});

export default withStyles(styles)(Usuario);
