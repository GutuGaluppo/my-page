import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledToggleButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: "20%",
  right: "40px",
  width: "50px",
  height: "50px",
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: "50%",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease-in-out",
  zIndex: 1001,
  backdropFilter: "blur(10px)",
  boxShadow: theme.shadows[4],

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
    transform: "scale(1.05)",
  },

  "& svg": {
    fontSize: "1.5rem",
    transition: "transform 0.3s ease-in-out",
  },

  "&:hover svg": {
    transform: "rotate(180deg)",
  },
}));
