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
  // top: 0,
  // left: 0,
  // right: 0,
  // zIndex: 1100,
  padding: "10px 30px",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "auto",
  padding: 0,
  color: "#333",
});

export const Logo = styled(Typography)({
  fontFamily: "Monofett",
  fontWeight: 300,
  "&:hover": {
    cursor: "pointer",

    // color: "rgba(0, 0, 0, 0.6)",
    transform: "scale(1.1)",
    transition: "all 0.6s ease-in-out",
  },
});

export const MenuButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,

  backgroundColor: "#1F2937",
  color: "white",
  borderRadius: "25px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#374151",
  },
});

type Props = {
  isOpen: boolean;
};

export const MenuBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<Props>(({ isOpen }) => ({
  position: "relative",
  backgroundColor: "#1F2937",
  color: "white",
  borderRadius: "25px",
  padding: "30px 20px 12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  width: isOpen ? "300px" : "100px",
  height: isOpen ? "160px" : "50px",
  overflow: "hidden",
  transition: "width 1s ease-in-out, height 1s ease-in-out",
}));

export const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  "&:hover": {
    color: "#374151",
  },
});
