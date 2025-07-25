import React from "react";
import { ArrowForward } from "@mui/icons-material";
import {
  HeroContainer,
  HeroContent,
  LeftContent,
  RightContent,
  MainTitle,
  Subtitle,
  ContactButton,
  ProfileImage,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
} from "./styled";
import profilePic from "../../assets/images/gutu.png";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer maxWidth="lg">
      <HeroContent>
        <LeftContent>
          <MainTitle variant="h1">
            <span
              style={{ fontSize: "2.3rem", fontFamily: "Instrument Serif" }}
            >
              Hey. I'm Gutu Galuppo,
            </span>
            <br />
            <span style={{ fontSize: "inherit" }}>A Frontend Developer</span>
            <br />
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: "inherit",
                fontWeight: "100",
              }}
            >
              & Sound
            </span>
            <br />
            <span style={{ fontSize: "inherit" }}>DESIGNER</span>
          </MainTitle>
          <Subtitle>
            Transforming simple mock-ups into semantic, responsive, reusable,
            scalable, and high-performing applications.
          </Subtitle>
          <ContactButton endIcon={<ArrowForward />}>CONTACT ME</ContactButton>
        </LeftContent>

        <RightContent>
          <ProfileImage src={profilePic} alt="Solt - UI/UX Designer" />
          <StatsContainer>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>280+</StatNumber>
              <StatLabel>Projects Delivered</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>*99%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50</StatNumber>
              <StatLabel>Clients worldwide</StatLabel>
            </StatItem>
          </StatsContainer>
        </RightContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
