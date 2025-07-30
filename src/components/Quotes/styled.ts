import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import pattern from "../../assets/images/pattern04.svg";

export const QuotesContainer = styled(Container)({
  margin: "0 auto",
  padding: "160px 0",
});

export const QuotesGrid = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
});

type BoxProps = {
  name?: string;
  period?: string;
};

export const BorderBox = styled(Box)<BoxProps>(({ period }) => ({
  position: "relative",
  fontFamily: "Bebas Neue",
  fontSize: "20px",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "0",
    width: "500px",
    height: "350px",
    border: "3px grey",
    borderStyle: "double",
    zIndex: 10,
    borderRadius: "10px",
  },
}));

export const QuoteCard = styled(Box)<BoxProps>({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  padding: "2rem",
  margin: "1rem",
  width: "500px",
  height: "350px",
  background: "linear-gradient(135deg, #f0f0f0 80%, rgb(219, 219, 213) 100%)",
  borderRadius: "10px",
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
    fontFamily: "Bebas Neue",
    fontSize: "28px",
    lineHeight: "0.8",
    top: "-9%",
    left: "50px",
    padding: "0px 10px",
    height: "min-content",
    textAlign: "center",
    background: "rgb(219, 219, 213)",
    borderRadius: "10px 10px 0 0",
    zIndex: 101,
  },
});

export const QuoteTitle = styled(Typography)({
  fontFamily: "Bebas Neue",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#1F2937",
});

export const QuoteCompany = styled(Typography)({
  fontFamily: "Instrument Serif",
  // fontStyle: "italic",
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#1F2937",
  alignSelf: "flex-end",
});

export const QuoteDescription = styled(Typography)({
  marginTop: "10px",
  fontSize: "1rem",
  color: "#6B7280",
  lineHeight: "1.6",
});

export const QuoteIcon = styled(Box)({
  position: "absolute",
  top: "10px",
  right: "20px",
  filter: "grayscale(100%)",
  marginBottom: "20px",
  "& svg": {
    fontSize: "5rem",
    color: "#3B82F6",
  },
});
