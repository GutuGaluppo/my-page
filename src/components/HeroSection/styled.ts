import { styled } from "@mui/material/styles";
import { Container, Typography, Button, Box } from "@mui/material";

export const HeroContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "100px",
  paddingBottom: "50px",
}));

export const HeroContent = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
  alignItems: "center",
  width: "100%",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: "40px",
    textAlign: "center",
  },
});

export const LeftContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

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
  fontSize: "2rem",
  fontWeight: 100,
  color: "rgb(31,31,29)",
  lineHeight: "1.1",
  marginBottom: "30px",
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
  alignItems: "center",
  gap: "40px",
});

export const ProfileImage = styled("img")({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%) scaleX(-1)",
  width: "auto",
  height: "780px",
  borderRadius: "0 0 50% 50%",
  objectFit: "cover",

  "@media (max-width: 768px)": {
    width: "250px",
    height: "250px",
  },
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
