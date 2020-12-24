import React from "react";
import styled from "styled-components";
import ComponentLayout from "../layout/Component.layout";

const ListItem = styled.div`
  background-color: red;
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

  background-color: DodgerBlue;
`;

const AboutMe = () => {
  return (
    <ComponentLayout>
      <h2 style={{ textAlign: "center" }}>About Me</h2>
      <Container>
        <ListItem style={{ flexGrow: 1 }}>
          <img src="./profile_pic.jpeg" height={450} width={500} />
          {/* <h3>Who am i ?</h3>
          <p>
            Is ut graece delectus repudiare, in habeo labore electram cum.
            Iracundia percipitur et usu.
          </p> */}
        </ListItem>
        {/* <ListItem style={{ flexGrow: 1 }}>
          <h3>Who am i ?</h3>
          <p>
            Is ut graece delectus repudiare, in habeo labore electram cum.
            Iracundia percipitur et usu. Nonumes consequat vix et, mea inani
            veritus democritum ei. His ullum feugait cu, ipsum semper molestiae
            no ius, eam deleniti. Everti praesent sed an. Animal noluisse usu te
            eam deleniti Everti.
          </p>
        </ListItem> */}
        <ListItem style={{ flexGrow: 3 }}>
          <h3>Who am i ?</h3>
          <h2 style={{ textAlign: "center" }}>Vikash Kumar Verma</h2>
          Front-end Developer
          <p>
            Is ut graece delectus repudiare, in habeo labore electram cum.
            Iracundia percipitur et usu. Nonumes consequat vix et, mea inani
            veritus democritum ei. His ullum feugait cu, ipsum semper molestiae
            no ius, eam deleniti. Everti praesent sed an. Animal noluisse usu te
            eam deleniti Everti.
          </p>
        </ListItem>
      </Container>
    </ComponentLayout>
  );
};

export default AboutMe;
