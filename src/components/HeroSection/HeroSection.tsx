import { Box, Typography } from "@mui/material";
import React from "react";
import profilePic from "../../assets/images/susto02.jpg";
import {
  HeroContainer,
  PictureContainer,
  ProfileImage,
  RightContent,
  Subtitle,
} from "./styled";

const HeroSection: React.FC = () => {
  return (
    <HeroContainer maxWidth="lg" id="home">
      <Box>
        <PictureContainer>
          <ProfileImage src={profilePic} alt="Solt - UI/UX Designer" />
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Bebas Neue",
              position: "absolute",
              bottom: "-15px",
              left: "0px",
              fontWeight: 700,
              letterSpacing: "-1px",
              background: `linear-gradient(rgb(219, 219, 213) 65%, transparent 65%)`,
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            software engineer
          </Typography>
        </PictureContainer>
      </Box>

      <RightContent>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Bebas Neue",
            fontStyle: "italic",
            fontWeight: "100",
            fontSize: "9vw",
            lineHeight: "0.5",
          }}
        >
          gutu
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Bebas Neue",
            fontStyle: "italic",
            fontWeight: "100",
            fontSize: "clamp(70px, 250px, 250px)",
            lineHeight: "0.5",
            color: "grey",
          }}
        >
          galuppo
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Instrument Serif",
            fontWeight: "100",
            lineHeight: "0.5",
            color: "dimgrey",
          }}
        >
          Software Engineer
          <span
            style={{
              color: "grey",
              fontSize: "1.5rem",
              marginLeft: "0.5rem",
              transform: "rotate(90deg)",
            }}
          >
            since 2019
          </span>
        </Typography>

        <Subtitle>
          Transforming simple mock-ups into semantic, responsive, reusable,
          scalable, and high-performing applications.
        </Subtitle>
      </RightContent>
    </HeroContainer>
  );
};

export default HeroSection;
