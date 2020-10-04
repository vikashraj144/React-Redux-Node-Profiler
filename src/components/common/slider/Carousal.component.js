import React from "react";
import styled from "styled-components";
const CarousalList = styled.div`
  background-color: blue;
  color: white;
  min-height: 300px;
`;
const Carousal = (props) => {
  return <CarousalList>CarousalList</CarousalList>;
};

Carousal.propTypes = {};

export default Carousal;
