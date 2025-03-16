import { forwardRef } from "react"; 
import * as c from "./CustomComponents";
import styled from "styled-components";
import { Line } from "./svgs/Line";
import ProjectItem from "./ProjectItem";

const StyledSectionHeaderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: fit-content;
  margin: 0 auto;
  text-align: left;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

const Projects = forwardRef((props, ref) => {
  return (
    <ProjectsWrapper className="Projects" ref={ref}>
      <Line />
      <StyledSectionHeaderContainer>
        <c.NameText>My</c.NameText>
        <c.NameText isPink>Projects</c.NameText>
      </StyledSectionHeaderContainer>
      <ProjectItem
        projectTitle={"Personal Website"}
        date="Winter 2025 ❄️"
        content="Personal website created using Javascript and React, hosted on Github pages."
        githubLink="https://github.com/choiIsabelle/V1_Website"
        skills={["React", "Javascript"]}
      />
    </ProjectsWrapper>
  );
});

export default Projects;
