import { Box, styled, Typography } from "@mui/material";
import pattern from "../../assets/images/pattern04.svg";

// Removed fixed height constant to allow flexible sizing

export const StyledContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  paddingBlock: "5vh",
  minHeight: "100%",
});

export const StyledExperience = styled(Box)({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: "15vh",
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
    height: "100%",
    border: `2px solid ${theme.palette.divider}`,
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
  minHeight: "530px",
  height: "fit-content",
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
  color: theme.palette.text.primary,
}));

export const StyledLocationText = styled("p")(({ theme }) => ({
  fontWeight: 300,
  fontStyle: "italic",
  fontSize: "1rem",
  color: theme.palette.text.secondary,
}));

export const StyledDescription = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.primary,
}));

export const TechStackContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "40px",
  left: "2rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  maxWidth: "calc(100% - 7rem)", // Leave space for logo
}));

export const TechPill = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 12px",
  backgroundColor: theme.palette.action.hover,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "20px",
  fontSize: "0.75rem",
  fontWeight: "500",
  color: theme.palette.text.primary,
  backdropFilter: "blur(8px)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
    borderColor: theme.palette.primary.main,
    transform: "translateY(-1px)",
  },
}));
