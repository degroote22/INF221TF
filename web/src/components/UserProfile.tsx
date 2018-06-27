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
import { graphql } from "react-apollo";
import { UserProfileQuery } from "src/config/Queries";
import {
  UfvCourses,
  UfvYears,
  UserProfile,
  UserRate
} from "src/generated/types";
import CoursesArr from "src/utils/UfvCourses";
import YearsArr from "src/utils/UfvYears";
import Loading from "./Loading";

const prettyCourse = (course: UfvCourses): string => {
  const item = CoursesArr.find(x => x.value === course);
  return item ? item.label : "";
};

const prettyYear = (year: UfvYears): string => {
  const item = YearsArr.find(x => x.value === year);
  return item ? item.label : "";
};

type IProps = WithStyles<ClassesNames> & { user?: UserProfile.User };

class UserProfile extends React.Component<IProps> {
  public render() {
    const { user, classes } = this.props;
    if (!user) {
      return <Loading layout={false} />;
    }
    const confiavel: UserRate = "Confiavel";
    const userClassification =
      user.rate === confiavel ? "Confiável" : "Iniciante";
    return (
      <React.Fragment>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {user.name[0]}
            </Avatar>
          }
          title={user.name}
          subheader={prettyCourse(user.course) + " - " + prettyYear(user.year)}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {userClassification}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            classificação
          </Typography>
          <Typography variant="headline" component="h2">
            {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            data de cadastro
          </Typography>
          <Typography variant="headline" component="h2">
            {user.reviews ? user.reviews.length : 0}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            avaliações
          </Typography>
        </CardContent>
      </React.Fragment>
    );
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

const Presentation = withStyles(styles)(UserProfile);

const withData = graphql<
  { id: string },
  UserProfile.Query,
  UserProfile.Variables
>(UserProfileQuery, { options: props => ({ variables: { id: props.id } }) });

export default withData(props => {
  return (
    <Presentation
      user={props.data ? props.data.user || undefined : undefined}
    />
  );
});
