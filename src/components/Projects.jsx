import { forwardRef } from "react";
import * as c from "./CustomComponents";
import styled from "styled-components";
import { Line } from "./svgs/Line";
import ProjectItem from "./ProjectItem";
import strings from "../locales/en.json";

const StyledSectionHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1rem;
  min-width: 0;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
