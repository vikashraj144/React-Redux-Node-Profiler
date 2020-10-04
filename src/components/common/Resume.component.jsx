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

const Resume = () => {
  return (
    <ComponentLayout>
      <h3>Resume</h3>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Pepsico (Pepsi)</Typography>
            <Typography color="textSecondary">Nov 2019 to Till now</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Lead Engineer </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>Project Lead / Sr software developer</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">Bridging health care</Typography>
            <Typography color="textSecondary">Nov 2016 to Aug 2017</Typography>
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
            <Typography>Team Lead</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>Sr Software developer</Typography>
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
            <Typography>Software developer</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ComponentLayout>
  );
};

export default Resume;
