import React from 'react'
import styled from 'styled-components'
import * as c from './CustomComponents'
import ExperienceSection from './ExperienceSection'
import strings from '../locales/en.json'

const StyledSectionHeaderContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: baseline;
gap: 0.75rem;
min-width: 0;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
    min-width: 0;

    @media (max-width: 600px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
`;

const ExperienceSectionContainer = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;
`

const Experience = React.forwardRef((props, ref) => {
  return (
    <ProjectsWrapper className='ProjectsWrapper' ref={ref}>
    <ExperienceSectionContainer>
    <StyledSectionHeaderContainer>
        <c.NameText>{strings.sections.my}</c.NameText>
        <c.NameText isPink>{strings.sections.workExperience}</c.NameText>
    </StyledSectionHeaderContainer>
        {Object.values(strings.experience).map((exp, idx) => (
          <ExperienceSection
            key={exp.title + idx}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            companyLink={exp.companyLink}
            experienceBullets={exp.experienceBullets}
            date={exp.date}
            skills={exp.skills}
          />
        ))}
    </ExperienceSectionContainer>
    </ProjectsWrapper>
  )
})

export default Experience
