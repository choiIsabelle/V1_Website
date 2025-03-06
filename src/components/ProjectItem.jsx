import React from 'react'
import styled from "styled-components"

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
display: flex;
flex-direction: column;
width: 400px;
height: fit-content;
padding: 1rem;
margin-top: 1rem;
border-radius: 10px;
`;

const ProjectsContainer = styled.div`

`;


const ProjectItem = ({projectTitle, date, content, skills, githubLink, hostedLink}) => {
  return (
    <Card>
      
    </Card>
  )
}

export default ProjectItem
