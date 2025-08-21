import { Box } from "@mui/material";
import profilePic from "../../assets/images/susto02.jpg";
import SkillSphere from "../SkillSphere";
import {
  Galuppo,
  Gutu,
  HeroContainer,
  PictureContainer,
  ProfileImage,
  RightContent,
  StyledImageText,
  StyledPreTag,
  Subtitle,
} from "./styled";

const codeString = `:{
    "name": "Augusto Galuppo",
    "nickname": "Gutu",
    "email": "galuppodev@gmail.com",
    "location": "Berlin - Germany",
  }`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer maxWidth="lg" id="home">
      <Box>
        <Gutu variant="h1">gutu</Gutu>
        <Galuppo variant="h1">galuppo</Galuppo>
        <PictureContainer>
          <ProfileImage src={profilePic} alt="Solt - UI/UX Designer" />
          <StyledImageText variant="h3">software engineer</StyledImageText>
          <StyledPreTag>{codeString}</StyledPreTag>
        </PictureContainer>

        <Subtitle>
          Transforming simple mock-ups into semantic, responsive, reusable,
          scalable, and high-performing applications.
        </Subtitle>
      </Box>

      <RightContent>
        <SkillSphere widthVw={900} heightVh={600} />
      </RightContent>
    </HeroContainer>
  );
};

export default HeroSection;
