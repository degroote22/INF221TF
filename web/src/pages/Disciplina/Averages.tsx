import Grid from "@material-ui/core/Grid";
import {
  StyleRulesCallback,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Mood from "@material-ui/icons/Mood";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Whatshot from "@material-ui/icons/Whatshot";
import * as React from "react";
import { IClassType } from "../../utils/types";

type AverageDisplayerClassNames = "root";

const AverageDisplayerStyles: StyleRulesCallback<
  AverageDisplayerClassNames
> = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    color: theme.palette.primary.main
  }
});

const AverageDisplayerBase: React.SFC<
  {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  } & WithStyles<AverageDisplayerClassNames>
> = ({ title, subtitle, icon, classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="title" color="primary">
        {subtitle}
      </Typography>
      {icon}
      <Typography variant="subheading">{title}</Typography>
    </div>
  );
};

const AverageDisplayer = withStyles(AverageDisplayerStyles)(
  AverageDisplayerBase
);

class Averages extends React.Component<
  WithStyles<DisciplinaClassNames> & { class: IClassType }
> {
  public render() {
    const c = this.props.class;
    const { classes } = this.props;
    return (
      <Grid container={true} className={classes.root} spacing={16}>
        <Grid item={true} xs={12} md={4}>
          <AverageDisplayer
            title="Utilidade média"
            subtitle={c.useful.toFixed(2)}
            icon={<ThumbUp />}
          />
        </Grid>
        <Grid item={true} xs={12} md={4}>
          <AverageDisplayer
            title="Facilidade média"
            subtitle={c.easy.toFixed(2)}
            icon={<Mood />}
          />
        </Grid>
        <Grid item={true} xs={12} md={4}>
          <AverageDisplayer
            title="Recomendadações"
            subtitle={String(c.recommended)}
            icon={<Whatshot />}
          />
        </Grid>
      </Grid>
    );
  }
}
type DisciplinaClassNames = "root";
const styles: StyleRulesCallback<DisciplinaClassNames> = theme => ({
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(Averages);
