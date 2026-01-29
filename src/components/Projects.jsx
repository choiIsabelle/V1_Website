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
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Projects = forwardRef((props, ref) => {
  return (
    <ProjectsWrapper className="Projects" ref={ref}>
      <Line />
      <StyledSectionHeaderContainer>
        <c.NameText>{strings.sections.my}</c.NameText>
        <c.NameText isPink>{strings.sections.projects}</c.NameText>
      </StyledSectionHeaderContainer>
      <ProjectsGrid>
        {Object.values(strings.projects).map((project, idx) => (
          <ProjectItem
            key={project.title + idx}
            projectTitle={project.title}
            date={project.date}
            content={project.content}
            githubLink={project.githubLink}
            skills={project.skills}
            image={project.image}
            demoLink={project.demoLink}
          />
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
});

export default Projects;
