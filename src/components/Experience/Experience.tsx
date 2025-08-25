import SectionTitle from "../SectionTitle";
import { experiencesData } from "./experienceData";
import {
  Border,
  Logo,
  StyledContainer,
  StyledDescription,
  StyledExperience,
  StyledExperienceCard,
  StyledLocationText,
  StyledTitle,
  TechStackContainer,
  TechPill,
} from "./styled";

const Experience = () => {
  return (
    <>
      <StyledContainer id="experience">
        <SectionTitle title="Experience" />
        <StyledExperience>
          {experiencesData.map((experience, index) => {
            return (
              <StyledExperienceCard key={index}>
                <Border
                  company={experience.company}
                  period={experience.period}
                />
                <div>
                  <StyledTitle>{experience.position}</StyledTitle>
                  <StyledLocationText>{experience.location}</StyledLocationText>
                  <StyledDescription>
                    {experience.description.join(", ")}
                  </StyledDescription>
                </div>
                <TechStackContainer>
                  {experience.techStack.map((tech, techIndex) => (
                    <TechPill key={techIndex}>{tech}</TechPill>
                  ))}
                </TechStackContainer>
                <Logo src={experience.logo} />
              </StyledExperienceCard>
            );
          })}
        </StyledExperience>
      </StyledContainer>
    </>
  );
};

export default Experience;
