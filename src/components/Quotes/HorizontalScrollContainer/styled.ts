import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface TallOuterContainerProps {
  dynamicHeight: number | null;
}

interface HorizontalTranslateContainerProps {
  translateX: number;
}

export const TallOuterContainer = styled(Box)<TallOuterContainerProps>(
  ({ dynamicHeight }) => ({
    position: "relative",
    width: "100%",
    height: dynamicHeight ? `${dynamicHeight}px` : "auto",
  }),
);

export const StickyInnerContainer = styled(Box)({
  position: "sticky",
  top: 0,
  height: "100vh",
  width: "100%",
  overflowX: "hidden",
});

export const HorizontalTranslateContainer = styled(
  Box,
)<HorizontalTranslateContainerProps>(({ translateX }) => ({
  position: "absolute",
  height: "100%",
  // marginBlock: "-200px",
  willChange: "transform",
  transform: `translateX(${translateX}px)`,
}));
