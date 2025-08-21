import {
  Logo,
  OuterBox,
  StyledExperience,
  StyledExperienceItem,
} from "./styled";
import { Parallax } from "react-scroll-parallax";
import { experiencesData } from "./experienceData";

const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <StyledExperience id="experience">
        {experiencesData.map((experience) => {
          return (
            <Parallax key={experience.id} translateY={[-10, 30]}>
              <OuterBox period={experience.period}>
                <StyledExperienceItem
                  // key={experience.id}
                  company={experience.company}
                >
                  <Logo src={experience.logo} />
                  {/* <h1>{experience.company}</h1> */}
                  <div>
                    <h2>{experience.position}</h2>
                    {/* <p>{experience.period}</p> */}
                    <p
                      style={{
                        fontFamily: "Instrument Serif",
                        fontStyle: "italic",
                      }}
                    >
                      {experience.location}
                    </p>
                    <p
                      style={{
                        fontFamily: "Instrument Serif",
                        fontWeight: "bold",
                      }}
                    >
                      {experience.description.join(", ")}
                    </p>
                  </div>
                </StyledExperienceItem>
              </OuterBox>
            </Parallax>
            // <OuterBox period={experience.period}>
            //   <StyledExperienceItem
            //     key={experience.id}
            //     company={experience.company}
            //   >
            //     <Logo src={experience.logo} />
            //     {/* <h1>{experience.company}</h1> */}
            //     <div>
            //       <h2>{experience.position}</h2>
            //       {/* <p>{experience.period}</p> */}
            //       <p
            //         style={{ fontFamily: "Instrument Serif", fontStyle: "italic" }}
            //       >
            //         {experience.location}
            //       </p>
            //       <p style={{ fontFamily: "Instrument Serif", fontWeight: "bold" }}>
            //         {experience.description.join(", ")}
            //       </p>
            //     </div>
            //   </StyledExperienceItem>
            // </OuterBox>
          );
        })}
      </StyledExperience>
    </>
  );
};

export default Experience;
