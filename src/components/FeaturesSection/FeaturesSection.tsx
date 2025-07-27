import {
  DevicesOutlined,
  DrawRounded,
  PedalBikeSharp,
  TouchApp,
} from "@mui/icons-material";
import React from "react";
import {
  FeatureCard,
  FeatureDescription,
  FeatureIcon,
  FeaturesContainer,
  FeaturesGrid,
  FeatureTitle,
} from "./styled";

const features = [
  {
    icon: <DrawRounded />,
    title: "Tattoo",
    description:
      "Intuitive and engaging experiences tailored for your audience.",
  },
  {
    icon: <PedalBikeSharp />,
    title: "Brand Identity & Strategy",
    description:
      "Strong visual storytelling that makes your brand unforgettable.",
  },
  {
    icon: <DevicesOutlined />,
    title: "Responsive & Modern UI",
    description: "Pixel-perfect designs optimized for all devices.",
  },
  {
    icon: <TouchApp />,
    title: "Seamless Prototyping",
    description:
      "Interactive mockups to bring ideas to life before development.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer maxWidth="lg" id="aboutme">
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
