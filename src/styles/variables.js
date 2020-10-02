export const colors = {
  primary: "#00537D",
  primaryHover: "#063F5E",
  main: "#5f4f3d",
  blue: "#009ADC",
  lightBlue: "#0076B3",
};

export const fontSizes = {
  font12: "0.75rem", //12px
  font14: "0.875rem", //14px
  font16: "1rem", //16px
  font17: "1.063rem", //17px
  font18: "1.125rem", //18px
  font20: "1.25rem", //20px
  font24: "1.5rem", //24px
};

export const fontFamilies = {
  signPainter: `"SignPainter-HouseScript", sans-serif`,
  frontage: `"FrontageCondensed-Inline", sans-serif`,
  poppins: `'Poppins', sans-serif`,
  lato: `'Lato', sans-serif`,
};

export const breakpoints = {
  mobileMaxWidth: "991px",
  container: "1280px",
  belowIPad: "768px",
};

export const mediaQueries = {
  mobileAndAbove: `(min-width: ${breakpoints.mobileMaxWidth})`,
  belowIPad: `(max-width: ${breakpoints.belowIPad})`,
};
