import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import SingleColumn from "../styled/SingleColumn.styled";
// funcion component
// passing props

const FooterWrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  overflow: hidden;
  min-height: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const CopyRight = styled.div`
  text-align: center;
`;

const Footer = (props) => {
  return (
    <FooterWrapper>
      <SingleColumn>
        <CopyRight>Copyright © 2020. All Rights Reserved.</CopyRight>
      </SingleColumn>
    </FooterWrapper>
  );
};

export default Footer;
