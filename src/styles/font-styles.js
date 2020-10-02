import { createGlobalStyle } from "styled-components";

const FontFaces = createGlobalStyle`

@font-face {
  font-family: "SignPainter-HouseScript";
  src: url("/fonts/SignPainter-HouseScript.eot");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "FrontageCondensed-Inline";
  src: url("/fonts/FrontageCondensed-Inline.eot?#iefix")
      format("embedded-opentype"),
    url("/fonts/FrontageCondensed-Inline.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

`;

export default FontFaces;
