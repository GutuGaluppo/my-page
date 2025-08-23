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
    backgroundColor: theme.palette.background.default,
    border: "2px solid rgba(255, 255, 255, 0.7)",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    zIndex: 1000,
    backdropFilter: "blur(15px)",

    "& svg": {
      fontSize: "24px",
      marginBottom: "4px",
      transition: "all 0.3s ease-in-out",
      animation: "bounce 3s infinite",
      color: theme.palette.neutral[800],
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
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.9)",
      "& svg": {
        animation: "none",
      },
    },
  }),
);

export const ButtonText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: theme.palette.neutral[800],
}));
