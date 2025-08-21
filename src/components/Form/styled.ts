import { Box, Button, Card, Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)({
  paddingBlock: "160px",
});

export const FormCard = styled(Card)({
  borderRadius: "16px",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
});

export const ContactForm = styled(Box)({
  width: "50vw",
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  fontFamily: "Bebas Neue",
  whiteSpace: "nowrap",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  width: "min-content",
  background: `#333`,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    background: `dimgrey`,
  },
}));

type OuterBoxProps = {
  header?: string;
};

export const StyledExperienceItem = styled(Box)<OuterBoxProps>(
  ({ header }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "2rem",
    margin: "3rem auto",
    background: "linear-gradient(135deg, #f0f0f0 80%, rgb(219, 219, 213) 100%)",
    borderRadius: "10px",
    "&::before": {
      content: "''",
      position: "absolute",
      top: "-15px",
      left: "-20px",
      width: "100%",
      height: "100%",
      border: "1px solid #333",
      borderRadius: "10px",
    },
    "&::after": {
      content: `'${header}'`,
      position: "absolute",
      fontFamily: "Bebas Neue",
      fontSize: "34px",
      lineHeight: "0.8",
      top: "-7%",
      left: "50px",
      padding: "0px 10px",
      height: "min-content",
      textAlign: "center",
      background: "rgb(219, 219, 213)",
      borderRadius: "10px 10px 0 0",
      zIndex: 101,
    },
  }),
);
