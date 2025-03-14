import React from 'react'
import styled from 'styled-components'
import * as c from './CustomComponents'
import ExperienceSection from './ExperienceSection'

const StyledSectionHeaderContainer = styled.div`
display: flex;
gap: 0.75rem;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    max-width: fit-content;
    margin: 0 auto;
    text-align: left;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
`;

const ExperienceSectionContainer = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;
`

const Projects = () => {
  return (
    <ProjectsWrapper className='ProjectsWrapper'>
    <ExperienceSectionContainer>
    <StyledSectionHeaderContainer>
        <c.NameText>My</c.NameText><c.NameText isPink>Work Experience</c.NameText>
    </StyledSectionHeaderContainer>
        <ExperienceSection 
          title="DevSecOps Software Developer, CO-OP Student" 
          company="Ford Motor Company of Canada" 
          location="Ottawa, ON, CA"
          companyLink="https://www.ford.ca/"
          experienceBullets={
            ["Updated Continuous Development pipelines (Github Actions, Jenkins) to effectively manage resources.",
              "Investigated and facillitated improvements to CI/CD pipelines for Ford's internal projects.",
              "Updated documentation to facillitate software-hardware integration.",
              "Worked on updating build tools."
            ]}
          date="Winter ❄️ January 2025 - April 2025"
          skills={["Unix shell", "Github Actions", "Bash scripting", "Docker", "Jenkins"]}
        />
        <ExperienceSection 
          title="Front End Developer, CO-OP Student" 
          company="Kinaxis" 
          location="Ottawa, ON, CA"
          companyLink="https://www.kinaxis.com/en"
          experienceBullets={
            [" Translating UX mock-ups into functional React components.",
              "Adopted legacy Java features into Web application through creation of server-side API and new UI using Typescript, React.",
              "Implementing unit and integration tests (NUnit, Jest).",
              " Extending and improving React component functionality to alleviate technical debt and fulfill customer requests.",
              "Extending functionality of existing RESTful API endpoints"
            ]}
          date="Summer ☀️ May 2024 - August 2024"
          skills={["Typescript", "React", "C#", "REST API development", "Visual Studio", "NUnit", "Jest"]}
        />
        <ExperienceSection 
          title="Front End Developer, Intern" 
          company="Kinaxis" 
          location="Ottawa, ON, CA"
          companyLink="https://www.kinaxis.com/en"
          experienceBullets={
            ["Implemented unit tests to evaluate the efficiency of front-end components in Jest.",
              "Investigated and resolved client-side bugs and performance issues to heighten user experience.",
              "Amplified the usability and maintainability of highly-used React components to streamline development",
              "Collaborated on code reviews and live fire sessions to accelerate developer progress on tasks."
            ]}
          date="Summer ☀️ May 2023 - August 2023"
          skills={["Typescript", "React", "C#", "REST API development", "Visual Studio"]}
        />
    </ExperienceSectionContainer>
    </ProjectsWrapper>
  )
}

export default Projects
