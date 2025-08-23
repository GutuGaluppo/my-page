import { Box, styled, Typography } from "@mui/material";
import pattern from "../../assets/images/pattern04.svg";

const BOX_HEIGHT = "530px";

export const StyledContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
});

export const StyledExperience = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: "60px",
  gap: "2rem",
});

type BorderProps = {
  company?: string;
  period?: string;
};

export const Border = styled(Box)<BorderProps>(
  ({ company, period, theme }) => ({
    ...theme.typography.cardTitle,
    position: "absolute",
    top: "-15px",
    left: "-15px",
    width: "400px",
    height: BOX_HEIGHT,
    border: "2px solid grey",
    borderRadius: theme.borders.radius.small,
    zIndex: 10,
    "&::before": {
      content: `'${company}'`,
      position: "absolute",
      ...theme.typography.borderTitle,
      top: "-40px",
      left: "50px",
      padding: "0px 10px",
      height: "min-content",
      textAlign: "center",
      background: theme.palette.background.default,
      borderRadius: "10px 10px 0 0",
      zIndex: 11,
    },
    "&::after": {
      content: `'${period}'`,
      position: "absolute",
      ...theme.typography.accent,
      top: "50%",
      left: "-27%",
      padding: "0px 10px",
      height: "min-content",
      textAlign: "center",
      background: theme.palette.background.default,
      transform: "rotate(-90deg)",
      zIndex: 11,
    },
  }),
);

export const StyledExperienceCard = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  padding: "2rem",
  margin: "1rem",
  width: "400px",
  height: BOX_HEIGHT,
  background: theme.gradients.card,
  borderRadius: theme.borders.radius.small,
  "&::before": {
    content: `''`,
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundImage: `url(${pattern})`,
    opacity: 0.07,
    borderRadius: "10px 10px 0 0",
  },
  "&:hover img": {
    filter: "grayscale(0%)",
    opacity: 1,
  },
}));

export const Logo = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: "40px",
  width: "5rem",
  height: "auto",
  objectFit: "cover",
  filter: "grayscale(100%)",
  opacity: 0.5,
  transition: `filter 0.6s ease-in-out, opacity 0.6s ease-in-out`,
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
  ...theme.typography.cardTitle,
  fontSize: "1.8rem",
}));

export const StyledLocationText = styled("p")(({ theme }) => ({
  // fontFamily: "Instrument Serif",
  fontWeight: 300,
  fontStyle: "italic",
  fontSize: "1rem",
}));

export const StyledDescription = styled("p")(({ theme }) => ({
  fontSize: "1rem",
}));
