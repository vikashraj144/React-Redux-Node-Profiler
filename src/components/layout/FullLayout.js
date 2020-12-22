import React from "react";
import styled from "styled-components";
import FontStyles from "../../styles/font-styles";
import GlobalStyles from "../../styles/global-styles";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Container from "../styled/Container.styled";

const Main = styled.main`
  flex: 1;
`;

const FullLayout = ({ children }) => {
  return (
    <Container fullWidth>
      <FontStyles />
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

FullLayout.propTypes = {};

export default FullLayout;
