import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: "white",
  padding: "60px 0 30px",
  marginTop: "auto",
}));

export const FooterContent = styled(Box)({
  textAlign: "center",
});

export const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const Copyright = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));
