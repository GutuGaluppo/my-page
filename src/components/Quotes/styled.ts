import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import pattern from "../../assets/images/pattern04.svg";

export const QuotesContainer = styled(Box)({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "150px",
});

export const QuotesGrid = styled(Box)({
  position: "relative",
  height: "100%",
  padding: "0 0 0 150px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "30px",
  minWidth: "max-content",
});

type BoxProps = {
  name?: string;
  period?: string;
  isEven?: boolean;
};

export const BorderBox = styled(Box)<BoxProps>(({ isEven, theme }) => ({
  position: "relative",
  ...theme.typography.cardTitle,
  "&::before": {
    content: '""',
    position: "absolute",
    top: isEven ? "10px" : "5px",
    left: "5px",
    width: "600px",
    height: "350px",
    border: `3px ${theme.palette.divider}`,
    borderStyle: "double",
    zIndex: 10,
    borderRadius: theme.borders.radius.small,
  },
}));

export const QuoteCard = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  padding: "1.5rem",
  margin: "1rem",
  width: "600px",
  height: "350px",
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
    zIndex: 101,
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    ...theme.typography.sectionTitle,
    top: "-9%",
    left: "50px",
    padding: "0px 10px",
    height: "min-content",
    textAlign: "center",
    background: theme.palette.background.default,
    borderRadius: "10px 10px 0 0",
    zIndex: 101,
  },
}));

export const QuoteTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.cardTitle,
  color: theme.palette.text.primary,
}));

export const QuoteCompany = styled(Typography)(({ theme }) => ({
  ...theme.typography.heroSubtitle,
  fontSize: "1.2rem",
  fontWeight: "600",
  color: theme.palette.text.primary,
  alignSelf: "flex-end",
}));

export const QuoteDescription = styled(Typography)(({ theme }) => ({
  marginTop: "10px",
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  lineHeight: "1.6",
}));

export const QuoteIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "20px",
  filter: "grayscale(100%)",
  opacity: 0.6,
  "& svg": {
    fontSize: "8rem",
    color: theme.palette.primary.main,
  },
}));
