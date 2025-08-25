import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface FloatingButtonProps {
  isVisible: boolean;
}

export const FloatingButton = styled(Box)<FloatingButtonProps>(
  ({ theme, isVisible }) => ({
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "45px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    zIndex: 1000,
    backdropFilter: "blur(15px)",
    boxShadow: theme.shadows[4],

    "& svg": {
      fontSize: "24px",
      marginBottom: "4px",
      transition: "all 0.3s ease-in-out",
      animation: "bounce 3s infinite",
      color: theme.palette.text.primary,
    },

    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-8px)",
      },
      "60%": {
        transform: "translateY(-4px)",
      },
    },

    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      borderColor: theme.palette.primary.main,
      "& svg": {
        animation: "none",
        transform: "translateY(-3px)",
      },
    },
  }),
);

export const ButtonText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: theme.palette.text.primary,
}));
