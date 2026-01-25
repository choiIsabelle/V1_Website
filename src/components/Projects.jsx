import { forwardRef } from "react";
import * as c from "./CustomComponents";
import styled from "styled-components";
import { Line } from "./svgs/Line";
import ProjectItem from "./ProjectItem";
import strings from "../locales/en.json";

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
        <c.NameText>{strings.sections.my}</c.NameText>
        <c.NameText isPink>{strings.sections.projects}</c.NameText>
      </StyledSectionHeaderContainer>
      {Object.values(strings.projects).map((project, idx) => (
        <ProjectItem
          key={project.title + idx}
          projectTitle={project.title}
          date={project.date}
          content={project.content}
          githubLink={project.githubLink}
          skills={project.skills}
        />
      ))}
    </ProjectsWrapper>
  );
});

export default Projects;
