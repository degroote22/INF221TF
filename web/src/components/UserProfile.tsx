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
import { ComponentBase } from "resub";
import UserManager from "src/singletons/UserManager";
import { IClassReview, IUser, UserRateEnum } from "src/utils/types";
import ReviewManager from "../singletons/ReviewManager";
import Loading from "./Loading";

const initialState = {
  user: undefined as IUser | undefined,
  reviews: [] as IClassReview[]
};
type IProps = WithStyles<ClassesNames> & { id: string };
class UserProfile extends ComponentBase<IProps, typeof initialState> {
  public readonly state = initialState;
  public render() {
    const { user, reviews } = this.state;
    if (!user) {
      return <Loading layout={false} />;
    }
    const userClassification =
      user.rate === UserRateEnum.confiavel ? "Confiável" : "Iniciante";
    const { classes } = this.props;
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
  }

  protected _buildState(props: IProps, initial: boolean) {
    return {
      ...this.state,
      user: UserManager.getUser(props.id),
      reviews: ReviewManager.getUserReviews(props.id)
    };
  }
}

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
