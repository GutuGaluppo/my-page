import { styled } from "@mui/material/styles";
import { Container, Typography, Button, Box } from "@mui/material";

export const HeroContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  paddingTop: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MainTitle = styled(Typography)({
  fontFamily: "Bebas Neue",
  fontSize: "6rem",
  fontWeight: 500,
  lineHeight: "0.9",
  color: "#1F2937",
  marginBottom: "20px",
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
  },
});

export const Subtitle = styled(Typography)({
  fontFamily: "Instrument Serif",
  fontSize: "1.8rem",
  fontWeight: 100,
  color: "rgb(31,31,29)",
  lineHeight: "1.1",
  marginBottom: "30px",
  textAlign: "right",
  zIndex: 100,
});

export const ContactButton = styled(Button)({
  backgroundColor: "#F59E0B",
  color: "white",
  padding: "15px 30px",
  fontSize: "14px",
  fontWeight: "600",
  borderRadius: "8px",
  textTransform: "uppercase",
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: "#D97706",
  },
  "@media (max-width: 768px)": {
    alignSelf: "center",
  },
});

export const RightContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "40px",
  maxWidth: "660px",
});

export const PictureContainer = styled(Box)({
  position: "relative",
  maxWidth: "700px",
  minWidth: "560px",
  borderRadius: "0 0 0 40px",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "0",
    right: "0",
    width: "30%",
    height: "50px",
    background: "rgb(219, 219, 213)",
    borderRadius: "0 0 0 20px",
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    bottom: "-10px",
    right: "15px",
    width: "100%",
    height: "100%",
    border: "solid 2px grey",
    // background: "rgb(29, 219, 213)",
    borderRadius: "0 0 0 20px",
    zIndex: 100,
  },
});

export const ProfileImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  filter: "grayscale(100%)",

  // "@media (max-width: 768px)": {
  //   width: "250px",
  //   height: "250px",
  // },
});

export const StatsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "flex-end",
  "@media (max-width: 768px)": {
    alignItems: "center",
  },
});

export const StatItem = styled(Box)({
  textAlign: "right",
  "@media (max-width: 768px)": {
    textAlign: "center",
  },
});

export const StatNumber = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#1F2937",
  lineHeight: "1",
});

export const StatLabel = styled(Typography)({
  fontSize: "0.9rem",
  color: "#6B7280",
  marginTop: "5px",
});
