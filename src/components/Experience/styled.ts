import { Box, styled } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import pattern from "../../assets/images/pattern04.svg";

export const StyledExperience = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "0 auto",
  paddingTop: "160px",
  gap: "2rem",
});

type OuterBoxProps = {
  company?: string;
  period?: string;
};

export const OuterBox = styled(Parallax)<OuterBoxProps>(({ period }) => ({
  position: "relative",
  fontFamily: "Bebas Neue",
  fontSize: "20px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-15px",
    left: "0",
    width: "400px",
    height: "550px",
    border: "2px solid grey",
    borderRadius: "10px",
    zIndex: 10,
  },
  "&::after": {
    content: `'${period}'`,
    position: "absolute",
    fontFamily: "Courier New",
    fontSize: "18px",
    fontWeight: "bold",
    top: "50%",
    left: "-23%",
    padding: "0px 10px",
    height: "min-content",
    textAlign: "center",
    background: "rgb(219, 219, 213)",
    transform: "rotate(-90deg)",
    zIndex: 101,
  },
}));

export const StyledExperienceItem = styled(Box)<OuterBoxProps>(
  ({ company }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "2rem",
    margin: "1rem",
    width: "400px",
    height: "550px",
    background: "linear-gradient(135deg, #f0f0f0 80%, rgb(219, 219, 213) 100%)",
    borderRadius: "10px",
    "&::before": {
      content: `''`,
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      textAlign: "center",
      backgroundImage: `url(${pattern})`,
      opacity: 0.07,
      borderRadius: "10px 10px 0 0",
      zIndex: 101,
    },
    "&::after": {
      content: `'${company}'`,
      position: "absolute",
      fontFamily: "Bebas Neue",
      fontSize: "28px",
      lineHeight: "0.8",
      top: "-5%",
      left: "50px",
      padding: "0px 10px",
      height: "min-content",
      textAlign: "center",
      background: "rgb(219, 219, 213)",
      borderRadius: "10px 10px 0 0",
      zIndex: 101,
    },
  }),
);

export const Logo = styled("img")({
  width: "5rem",
  height: "auto",
  objectFit: "cover",
  filter: "grayscale(100%)",
  transition: "width 0.3s ease-in-out, filter 0.3s ease-in-out",
  "&:hover": {
    width: "8rem",
    filter: "grayscale(0%)",
  },
});
