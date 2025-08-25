import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  position: "static",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "auto",
  padding: "2px 30px",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const Logo = styled(Typography)(({ theme }) => ({
  ...theme.typography.logoMono,
  color: theme.palette.text.primary,
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
    transition: "all 0.6s ease-in-out",
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.background.default,
  borderRadius: theme.borders.radius.large,
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

type Props = {
  isOpen: boolean;
};

export const MenuBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Props>(({ isOpen, theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.background.default,
  borderRadius: theme.borders.radius.large,
  padding: "30px 20px 12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  width: isOpen ? "300px" : "100px",
  height: isOpen ? "160px" : "50px",
  overflow: "hidden",
  transition: "width 1s ease-in-out, height 1s ease-in-out",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.background.default,
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));
