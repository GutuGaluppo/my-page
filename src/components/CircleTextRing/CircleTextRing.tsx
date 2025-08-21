import React from "react";
import {
  Circle,
  CircleContainer,
  TextBorderSVG,
  TextOnPath,
  TextPath,
} from "./styled";

interface CircleTextRingProps {
  borderText?: string;
  circleSize?: number;
}

// Main Component
const CircleTextRing: React.FC<CircleTextRingProps> = ({
  borderText = "Software Engineer since 2019",
  circleSize = 90,
}) => {
  const svgSize = circleSize + 20;
  const radius = (circleSize - 20) / 2;
  const center = svgSize / 2;

  // Create a circle path for the text to follow
  const pathId = "circle-path";
  
  const pathD = `M ${center},${center - radius} A ${radius},${radius} 0 1,1 ${center - 0.01},${center - radius}`;

  // Repeat text to fill the circle
  // const repeatedText = `${borderText} • `.repeat(2);
  const ringText = `${borderText} • `;

  return (
    <>
      <CircleContainer style={{ width: circleSize, height: circleSize }}>
        <Circle />
        <TextBorderSVG
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          style={{ width: svgSize + 45, height: svgSize + 45 }}
        >
          <defs>
            <TextPath id={pathId} d={pathD} />
          </defs>
          <TextOnPath>
            <textPath href={`#${pathId}`} startOffset="25%">
              {ringText}
            </textPath>
          </TextOnPath>
        </TextBorderSVG>
      </CircleContainer>
    </>
  );
};

export default CircleTextRing;
