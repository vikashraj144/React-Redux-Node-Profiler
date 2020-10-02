import { createGlobalStyle } from "styled-components";
import { fontFamilies, mediaQueries } from "./variables";
const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {
    border: 0;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    font-family: ${fontFamilies.poppins};
    font-size: 14px;

    @media ${mediaQueries.mobileAndAbove} {
        font-size: 16px;
    }
}
`;

export default GlobalStyles;
