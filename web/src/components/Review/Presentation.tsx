import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import withStyles, {
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Edit from "@material-ui/icons/Edit";
import Person from "@material-ui/icons/Person";
import Star from "@material-ui/icons/Star";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import * as React from "react";
import { MutationFunc } from "react-apollo";
import {
  ReviewVotesTypes,
  SetVoteOnReview,
  UfvClassDetail
} from "src/generated/types";
import HistoryManager from "src/singletons/HistoryManager";
import { BLOCK } from "src/utils/constants";
import { IReviewPosition } from "src/utils/types";

class Review extends React.Component<
  WithStyles<ButtonClassesNames> & {
    review: UfvClassDetail.Reviews;
    position: IReviewPosition;
    myVote: ReviewVotesTypes | null;
    setVote?: MutationFunc<SetVoteOnReview.Mutation, SetVoteOnReview.Variables>;
  }
> {
  public render() {
    const { classes, review, position } = this.props;
    const user = review.reviewer;
    const userName = review.anonymous ? "Usuário Anônimo" : user.name;
    const userClassification =
      user.rate === "Confiavel" ? "Confiável" : "Iniciante";

    const userRecomendation = review.recommended
      ? "Recomendou a matéria"
      : "Não recomendou a matéria";

    return (
      <Paper elevation={1} className={classes.paper}>
        {position !== "other" && (
          <Avatar className={classes.badge}>
            {position === "mine" ? <Person /> : <Star />}
          </Avatar>
        )}
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar
              className={
                review.recommended
                  ? classes.userAvatarRec
                  : classes.userAvatarNon
              }
            >
              {review.recommended ? "S" : "N"}
            </Avatar>
          }
          title={userName}
          onClick={this.onUserClick}
          subheader={
            userClassification + ", " + userRecomendation.toLowerCase()
          }
        />
        <div className={classes.textBlock}>
          <Typography variant="headline" component="h2">
            {new Date(review.createdAt).toLocaleDateString()}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            data de criação
          </Typography>
          <Typography variant="headline" component="h2">
            {review.easy[1]}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            facilidade
          </Typography>
          <Typography variant="headline" component="h2">
            {review.useful[1]}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            utilidade
          </Typography>
          {review.description.length !== 0 && (
            <React.Fragment>
              <Typography
                className={classes.commentHeader}
                color="textSecondary"
              >
                Comentário:
              </Typography>

              <Typography className={classes.comment} variant="body2">
                {review.description}
              </Typography>
            </React.Fragment>
          )}
        </div>
        {this.renderButtons()}
      </Paper>
    );
  }
  private onUserClick = () => {
    HistoryManager.goToUser(this.props.review.reviewer.id);
  };
  private renderButtons = () => {
    const { classes, position } = this.props;

    if (position === "mine") {
      return (
        <Button
          onClick={this.onEdit}
          variant="contained"
          className={classes.button}
          color="secondary"
        >
          <Edit className={classes.leftIcon} />
          Editar
        </Button>
      );
    }

    const myVote = this.props.myVote;

    return (
      <div>
        <Button
          onClick={this.onUpvote}
          variant="contained"
          className={classes.button}
          color={myVote && myVote === "Agree" ? "primary" : "default"}
          disabled={Boolean(myVote && myVote === "Disagree")}
        >
          <ThumbUp className={classes.leftIcon} />
          Concordo
        </Button>
        <Button
          variant="contained"
          onClick={this.onDownvote}
          className={classes.button}
          disabled={Boolean(myVote && myVote === "Agree")}
          color={myVote && myVote === "Disagree" ? "primary" : "default"}
        >
          <ThumbDown className={classes.leftIcon} />
          Discordo
        </Button>
      </div>
    );
  };

  private onEdit = () => {
    // tslint:disable-next-line:no-console
    console.log("onedit");
  };

  private onUpvote = () => {
    if (this.props.setVote) {
      this.props.setVote({
        variables: { reviewId: this.props.review.id, type: "Agree" }
      });
    }
  };

  private onDownvote = () => {
    if (this.props.setVote) {
      this.props.setVote({
        variables: { reviewId: this.props.review.id, type: "Disagree" }
      });
    }
  };
}
type ButtonClassesNames =
  | "paper"
  | "badge"
  | "pos"
  | "comment"
  | "commentHeader"
  | "button"
  | "textBlock"
  | "cardHeader"
  | "leftIcon"
  | "userAvatarNon"
  | "userAvatarRec";
const styles: StyleRulesCallback<ButtonClassesNames> = theme => ({
  cardHeader: {
    cursor: "pointer"
  },
  pos: {
    marginBottom: 12
  },
  comment: {
    marginBottom: 12,
    maxWidth: 400
  },
  commentHeader: {
    marginTop: 24
  },

  textBlock: { marginLeft: BLOCK / 4 },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 20
  },
  button: {
    margin: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },
  paper: {
    marginTop: BLOCK / 4,
    padding: BLOCK / 8,
    minHeight: BLOCK,
    position: "relative"
  },
  badge: {
    position: "absolute",
    left: -BLOCK / 8,
    top: -BLOCK / 8,
    width: BLOCK / 2,
    height: BLOCK / 2
  },
  userAvatarNon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  userAvatarRec: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
});

export default withStyles(styles)(Review);
