import React from "react";
import styled from "styled-components";
import ComponentLayout from "../layout/Component.layout";

const ListItem = styled.div`
  display: flex;
  width: 20%;
  flex-wrap: wrap;
  margin: 10px;
  text-align: center;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  // background-color: DodgerBlue;
`;

const AboutMe = () => {
  return (
    <ComponentLayout>
      <h2 style={{ textAlign: "center" }}>About Me</h2>
      <h2 style={{ textAlign: "center" }}> | </h2>
      <Container>
        <ListItem style={{ flexGrow: 1 }}>
          <img
            src="./profile_pic.jpeg"
            height={"100%"}
            width={"100%"}
            alt="profile_img"
          />
        </ListItem>
        <ListItem style={{ flexGrow: 3 }}>
          <h3>Hello & Welcome UI/UX Designer Photographer Devloper</h3>
          <h2>I 'M Vikash Verma</h2>
          <p>
            Full Stack Developer / Front-end Developer / React - Redux Developer
          </p>
          <p>
            ✓ Adept in end-to-end development of software products from
            requirement analysis to system study, designing, coding, testing,
            de-bugging, documentation, and implementation.<br></br> ✓ Deft at
            mapping the requirements, custom designing solutions &
            troubleshooting for complex software & application problems.
          </p>
        </ListItem>
      </Container>
    </ComponentLayout>
  );
};

export default AboutMe;
