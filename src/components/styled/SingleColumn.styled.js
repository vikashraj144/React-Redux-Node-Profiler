import styled from "styled-components";
import { breakpoints, mediaQueries } from "../../styles/variables";
const SingleColumn = styled.section`
  width: 100%;
  /* padding: 1rem; */
  margin: 0 auto;

  @media ${mediaQueries.mobileAndAbove} {
    max-width: ${(props) => (props.fullWidth ? "100%" : breakpoints.container)};
    /* padding: 0.5rem; */
  }
`;

export default SingleColumn;
