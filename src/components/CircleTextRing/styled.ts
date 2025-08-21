import { Box, styled } from "@mui/material";

export const CircleContainer = styled(Box)({
  position: "relative",
  width: "250px",
  height: "250px",
});

export const Circle = styled(Box)({
  width: "100%",
  height: "100%",
  background: "radial-gradient(circle, tomato, red)",
  borderRadius: "50%",
  position: "relative",
});

export const TextBorderSVG = styled("svg")({
  position: "absolute",
  top: "0px",
  left: "0px",
  // transform: "translate(-50%, -50%)",
});

export const TextPath = styled("path")({
  fill: "none",
  stroke: "none",
});

export const TextOnPath = styled("text")({
  fontSize: "8px",
  // fontWeight: "bold",
  fill: "#333",
  letterSpacing: "1px",
  textTransform: "uppercase",
});
