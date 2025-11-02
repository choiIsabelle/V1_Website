import React from 'react'
import styled from "styled-components"
import { palette } from './palette';
import { GitHubIcon } from './svgs/GithubIcon';
import ItemButton from './svgs/ItemButton';

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 300px;
height: fit-content;
padding: 1rem;
margin-top: 1rem;
border-radius: 10px;
`;

const StyledTitle = styled.h3`
padding: 0;
margin: 0;

&:hover {
  background-color: initial;
  background-position: 0 0;
  color: #ad0a7cd7;
  font-weight: 700;
}
`

const StyledLink = styled.a`
text-decoration: none;
color: ${palette.red}

`

const StyledDate = styled.p`
font-weight: 600;
color: ${palette.grey}
`

const StyledContentText = styled.p`
padding: 0;
margin: 0;
font-weight: 500;
`

const StyledLinkContainer = styled.div`
margin-top: 1rem;
display: flex;
`

const SkillButtonContainer = styled.div`
display: flex;
padding-top: 1rem;
gap: 0.5rem;
`

const SkillButtons=({skills})=>{
  return (
      <>
          {skills.map((bullet,index)=>(
            <ItemButton title={bullet} key={index}/>
          ))}
      </>
  )
}



const ProjectItem = ({projectTitle, date, content, skills, githubLink, hostedLink}) => {
  return (
    <Card>
      <StyledLink href={githubLink} target="_blank" rel='noopener'><StyledTitle>{projectTitle}</StyledTitle></StyledLink>
      <StyledDate>{date}</StyledDate>
      <StyledContentText>{content}</StyledContentText>  

      <SkillButtonContainer>
        <SkillButtons skills={skills}/>
      </SkillButtonContainer>

      <StyledLinkContainer>
        <GitHubIcon width="25" height="25" />

      </StyledLinkContainer>
      
    </Card>
  )
}

export default ProjectItem
