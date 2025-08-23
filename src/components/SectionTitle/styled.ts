import { styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.sectionTitle,
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
  // marginBottom: "5vh",
  textAlign: "center",
  whiteSpace: "nowrap",
  color: theme.palette.background.default,
  textShadow:
    "2px 2px 1px rgba(77,77,77,0.5),3px 3px 3px rgba(77,77,77,0.2), -1px -1px 1px rgba(255,255,255,0.5)",
  // [theme.breakpoints.down("lg")]: {
  //   fontSize: "5rem",
  //   transform: "rotate(-90deg)",
  // },
}));
