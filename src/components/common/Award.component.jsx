import React from "react";
import styled from "styled-components";

const AwardContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  min-height: 100px;
`;
const AwardItem = styled.div`
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
`;
const Award = () => {
  return (
    <AwardContainer style={{ backgroundColor: "black" }}>
      <AwardItem>
        <div>7.5 Years</div>
        <div>Your Experience</div>
      </AwardItem>
      <AwardItem>
        <div>5</div>
        <div>Award</div>
      </AwardItem>
      <AwardItem>
        <div>20+</div>
        <div>Project Completed</div>
      </AwardItem>
    </AwardContainer>
  );
};

export default Award;
