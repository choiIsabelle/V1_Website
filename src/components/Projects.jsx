import React from 'react'
import * as c from './CustomComponents'
import styled from 'styled-components'
import {Line} from './svgs/Line'

const StyledSectionHeaderContainer = styled.div`
display: flex;
gap: 0.75rem;
`;

const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
flex-wrap: wrap;
max-width: fit-content;
margin: 0 auto;
text-align: left;
padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 2rem;
`;


const Projects = () => {
  return (
    <ProjectsWrapper>
    <Line/>
    <StyledSectionHeaderContainer>
        <c.NameText>My</c.NameText><c.NameText isPink>Projects</c.NameText>
    </StyledSectionHeaderContainer>
    </ProjectsWrapper>
  )
}

export default Projects