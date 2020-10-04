import React from "react";
import styled from "styled-components";

const LayoutComp = styled.section`
  margin-left: 10%;
  margin-right: 10%;
`;
const ComponentLayout = ({ children }) => {
  return <LayoutComp>{children}</LayoutComp>;
};

export default ComponentLayout;
