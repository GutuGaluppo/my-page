import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Gutu = styled(Typography)(({ theme }) => ({
  ...theme.typography.heroTitle,
  position: "relative",
  marginBottom: "25px",
  color: "transparent",
  fontSize: "clamp(50px, 140px, 180px)",
  "&::after": {
    content: "attr(data-outline)",
    position: "absolute",
    inset: "0 0 0 0",
    "-webkit-text-fill-color": "transparent",
    "-webkit-text-stroke-width": "2px",
    "-webkit-text-stroke-color": "black",
    zIndex: 3,
  },
}));

export const Galuppo = styled(Typography)(({ theme }) => ({
  ...theme.typography.heroTitle,
  position: "relative",
  fontSize: "clamp(70px, 250px, 250px)",
  color: "grey",
  "&::after": {
    content: "attr(data-outline)",
    position: "absolute",
    inset: "0 0 0 0",
    "-webkit-text-fill-color": "transparent",
    "-webkit-text-stroke-width": "2px",
    "-webkit-text-stroke-color": theme.palette.background.default,
    zIndex: 2,
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.heroSubtitle,
  color: theme.palette.text.primary,
  marginTop: "20px",
  textAlign: "right",
  zIndex: 100,
}));

export const PictureContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "700px",
  minWidth: "560px",
  borderRadius: "0 0 0 40px",
}));

export const ProfileImage = styled("img")({
  position: "relative",
  width: "100%",
  height: "auto",
  objectFit: "cover",
  filter: "grayscale(100%)",

  // "@media (max-width: 768px)": {
  //   width: "250px",
  //   height: "250px",
  // },
});

export const StyledImageText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "-15px",
  left: "0px",
  fontFamily: "Bebas Neue",
  fontSize: "3.2rem",
  fontWeight: 700,
  letterSpacing: "-1px",
  background: theme.gradients.subtle,
  backgroundClip: "text",
  textFillColor: "transparent",
}));

export const RightContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "660px",
});

export const StyledPreTag = styled("pre")({
  position: "absolute",
  top: "50%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
  fontSize: 14,
});
