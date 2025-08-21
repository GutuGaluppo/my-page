import { styled } from "@mui/material/styles";
import { Container, Typography, Button, Box } from "@mui/material";

export const HeroContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Gutu = styled(Typography)({
  fontFamily: "Bebas Neue",
  fontStyle: "italic",
  fontWeight: "100",
  fontSize: "9vw",
  lineHeight: "0.5",
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
});

export const Galuppo = styled(Typography)({
  fontFamily: "Bebas Neue",
  fontStyle: "italic",
  fontWeight: "100",
  fontSize: "clamp(70px, 250px, 250px)",
  lineHeight: "0.5",
  color: "grey",
});

export const Subtitle = styled(Typography)({
  fontFamily: "Instrument Serif",
  fontSize: "1.8rem",
  fontWeight: 100,
  color: "rgb(31,31,29)",
  lineHeight: "1.1",
  marginTop: "20px",
  textAlign: "right",
  zIndex: 100,
});

export const PictureContainer = styled(Box)({
  position: "relative",
  maxWidth: "700px",
  minWidth: "560px",
  borderRadius: "0 0 0 40px",
  // "&::after": {
  //   content: '""',
  //   position: "absolute",
  //   top: "0",
  //   right: "0",
  //   width: "40%",
  //   height: "50px",
  //   background: "rgb(219, 219, 213)",
  //   borderRadius: "0 0 0 20px",
  // },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: "-10px",
    right: "15px",
    width: "100%",
    height: "100%",
    border: "solid 2px rgb(255,81, 46, 0.8)",
    mixBlendMode: "multiply",
    // background: "rgb(255,81, 46, 0.8)",
    borderRadius: "0 0 0 20px",
    zIndex: 100,
  },
});

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

export const StyledImageText = styled(Typography)({
  fontFamily: "Bebas Neue",
  position: "absolute",
  bottom: "-15px",
  left: "0px",
  fontWeight: 700,
  letterSpacing: "-1px",
  background: `linear-gradient(rgb(219, 219, 213) 65%, transparent 65%)`,
  backgroundClip: "text",
  textFillColor: "transparent",
});

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
