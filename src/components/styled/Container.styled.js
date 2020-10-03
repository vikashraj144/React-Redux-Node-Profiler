import styled from "styled-components";
import { mediaQueries } from "../../styles/variables";
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  // padding: ${(props) => (props.fullWidth ? "0%" : "0% 10% 2% 10%")};

  flex-direction: column;
  background: #fff;
  @media ${mediaQueries.belowIPad} {
    margin: 2%;
  }
`;

export default Container;
