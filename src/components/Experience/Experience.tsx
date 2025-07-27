import {
  Logo,
  OuterBox,
  StyledExperience,
  StyledExperienceItem,
} from "./styled";

import { ExperienceProps } from "../../types";
import { Box } from "@mui/material";
import tildaLogo from "../../assets/images/tilda_logo.png";
import supervistaLogo from "../../assets/images/supervista_logo2.png";
import loudlyLogo from "../../assets/images/loudly_logo.png";

export const experiencesData: ExperienceProps[] = [
  {
    id: 1,
    company: "Loudly",
    logo: loudlyLogo,
    position: "Frontend Software Developer",
    period: "05/2022 - 02/2025",
    location: "Berlin, Germany",
    description: [
      "Contributed to the implementation of cutting-edge AI music generation technology",
      "Enhanced application performance and reliability through state management updates",
      "Resolved issues with responsive layouts to ensure optimal user experiences on all devices",
      "Executed comprehensive code maintenance and refactoring to elevate code quality and system efficiency",
    ],
    techStack: ["React", "TypeScript", "RTK Query", "Next.js", "GraphQL"],
    current: true,
  },
  {
    id: 2,
    company: "Tilda",
    logo: tildaLogo,
    position: "Full Stack Software Developer",
    period: "09/2021 - 03/2022",
    location: "Berlin, Germany",
    description: [
      "Optimized and maintained the platform to ensure seamless performance",
      "Refactored code to improve quality and increase test coverage",
      "Developed and implemented an email notification manager for timely user updates",
      "Designed and integrated engaging web animations to enhance the user experience",
    ],
    techStack: ["React", "Node.js", "JavaScript", "CSS3", "Firebase"],
    current: false,
  },
  {
    id: 3,
    company: "SuperVista",
    logo: supervistaLogo,
    position: "Frontend Software Developer",
    period: "03/2019 - 08/2021",
    location: "Brandenburg, Germany",
    description: [
      "Managed e-commerce platform, enabling users to search and purchase a wide range of glasses",
      "Refactored code to reduce loading and processing times",
      "Designed web animations to enhance visual effects and strengthen branding",
      "Gained key insights into tools and platforms through online courses and webinars",
    ],
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "E-commerce"],
    current: false,
  },
  // {
  //   id: 4,
  //   company: "Multiple Companies",
  //   position: "Sound Designer & Audio Director",
  //   period: "01/2003 - 10/2017",
  //   location: "Brazil, Miami, Barcelona, Italy, Berlin",
  //   description: [
  //     "Sound designer, soundtrack composer, and audio director for multiple audiovisual productions",
  //     "Cartoon dubbing and voiceover for commercials - directing, recording, and acting",
  //     "Developed strong attention to detail and creative problem-solving skills",
  //     "Built experience in project management and client communication",
  //   ],
  //   techStack: ["Pro Tools", "Logic Pro", "Audio Engineering", "Sound Design"],
  //   current: false,
  // },
];

const Experience = () => {
  return (
    <StyledExperience id="experience">
      {experiencesData.map((experience) => (
        <OuterBox period={experience.period}>
          <StyledExperienceItem
            key={experience.id}
            company={experience.company}
          >
            <Logo src={experience.logo} />
            {/* <h1>{experience.company}</h1> */}
            <div>
              <h2>{experience.position}</h2>
              {/* <p>{experience.period}</p> */}
              <p
                style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}
              >
                {experience.location}
              </p>
              <p style={{ fontFamily: "Instrument Serif", fontWeight: "bold" }}>
                {experience.description.join(", ")}
              </p>
            </div>
          </StyledExperienceItem>
        </OuterBox>
      ))}
    </StyledExperience>
  );
};

export default Experience;
