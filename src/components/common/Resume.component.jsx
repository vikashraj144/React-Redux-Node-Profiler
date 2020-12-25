import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import ComponentLayout from "../layout/Component.layout";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Resume = () => {
  const classes = useStyles();

  return (
    <ComponentLayout>
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Pepsico (Pepsi)
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Nov 2019 to Till now
                </Typography>
                <Typography variant="body2" component="p">
                  Working here as Lead Engineer.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" component="h2">
              Lead Engineer
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5" component="h2">
              Project Lead / Sr software developer
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bridging health care
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Nov 2016 to Aug 2017
                </Typography>
                <Typography variant="body2" component="p">
                  Working here as Lead Engineer.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Technotronics</Typography>
            <Typography color="textSecondary">
              March 2016 to OCT 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" component="h2">
              Team Lead
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="h5" component="h2">
              Sr Software developer
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">A1-Technology</Typography>
            <Typography color="textSecondary">
              Jan 2014 to March 2016
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Aryaan Solutions</Typography>
            <Typography color="textSecondary">Jan 2013 to Aug 2013</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h5" component="h2">
              Software developer
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ComponentLayout>
  );
};

export default Resume;
