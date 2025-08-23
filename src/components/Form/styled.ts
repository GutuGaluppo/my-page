import { Box, Button, Card, styled } from "@mui/material";

export const StyledContainer = styled(Box)({
  position: "relative",
  margin: "0 auto",
  maxWidth: "800px",
  paddingBlock: "160px",
});

export const FormCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.borders.radius.medium,
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
}));

export const ContactForm = styled(Box)({
  width: "50vw",
});

export const SubmitButton = styled(Button)(({ theme }) => ({
  ...theme.typography.cardTitle,
  whiteSpace: "nowrap",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  width: "min-content",
  background: theme.palette.neutral[800],
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    background: theme.palette.neutral[600],
  },
}));

type OuterBoxProps = {
  header?: string;
};

export const StyledForm = styled(Box)<OuterBoxProps>(({ header, theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "4rem",
  margin: "0 auto",
  background: theme.gradients.card,
  borderRadius: theme.borders.radius.small,
  // "&::before": {
  //   content: "''",
  //   position: "absolute",
  //   top: "-15px",
  //   left: "-20px",
  //   width: "100%",
  //   height: "100%",
  //   border: `1px solid ${theme.palette.neutral[800]}`,
  //   borderRadius: theme.borders.radius.small,
  // },
  // "&::after": {
  //   content: `'${header}'`,
  //   position: "absolute",
  //   ...theme.typography.sectionTitle,
  //   fontSize: "34px",
  //   top: "-7%",
  //   left: "50px",
  //   padding: "0px 10px",
  //   height: "min-content",
  //   textAlign: "center",
  //   background: theme.palette.background.default,
  //   borderRadius: "10px 10px 0 0",
  //   zIndex: 101,
  // },
}));
