import React from 'react'
import styled from 'styled-components'
import * as c from './CustomComponents'
import ExperienceSection from './ExperienceSection'
import strings from '../locales/en.json'

const StyledSectionHeaderContainer = styled.div`
display: flex;
gap: 0.75rem;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
`;

const ExperienceSectionContainer = styled.div`
display: flex;
gap: 1rem;
margin-left: 4rem;
flex-direction: column;
`

const Experience = React.forwardRef((props, ref) => {
  return (
    <ProjectsWrapper className='ProjectsWrapper' ref={ref}>
    <ExperienceSectionContainer>
    <StyledSectionHeaderContainer>
        <c.NameText>My</c.NameText><c.NameText isPink>Work Experience</c.NameText>
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
