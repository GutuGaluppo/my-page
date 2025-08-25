import { styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.sectionTitle,
  margin: "0 auto",
  textAlign: "center",
  whiteSpace: "nowrap",
  color: theme.palette.background.default,
  textShadow:
    theme.palette.mode === "light"
      ? "2px 2px 1px rgba(77,77,77,0.5),3px 3px 3px rgba(77,77,77,0.2), -1px -1px 1px rgba(255,255,255,0.5)"
      : "2px 2px 1px rgba(255,255,255,0.3), 3px 3px 3px rgba(0,0,0,0.4), -1px -1px 2px rgba(0,0,0,0.8)",
}));
