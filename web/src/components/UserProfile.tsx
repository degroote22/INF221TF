import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import red from "@material-ui/core/colors/red";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import UserManager from "src/singletons/UserManager";
import { UserRateEnum } from "src/utils/types";
import ReviewManager from "../singletons/ReviewManager";

const UserProfile: React.SFC<
  WithStyles<ClassesNames> & { id: string }
> = props => {
  const user = UserManager.getUser(props.id);
  const reviews = ReviewManager.getUserReviews(props.id);
  const userClassification =
    user.rate === UserRateEnum.confiavel ? "Confiável" : "Iniciante";
  const { classes } = props;
  return (
    <React.Fragment>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {user.name[0]}
          </Avatar>
        }
        title={user.name}
        subheader={user.course + " - " + user.year}
      />
      <CardContent>
        <Typography variant="headline" component="h2">
          {userClassification}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          classificação
        </Typography>
        <Typography variant="headline" component="h2">
          {user.created_at.toLocaleDateString()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          data de cadastro
        </Typography>

        <Typography variant="headline" component="h2">
          {reviews.length}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          avaliações
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

type ClassesNames = "avatar" | "pos";
const styles: StyleRulesCallback<ClassesNames> = theme => ({
  avatar: {
    backgroundColor: red[500]
  },
  pos: {
    marginBottom: 12
  }
});

export default withStyles(styles)(UserProfile);
