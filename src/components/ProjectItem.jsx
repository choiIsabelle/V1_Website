import React from "react";
import styled from "styled-components";
import { GitHubIcon } from "./svgs/GithubIcon";
import ItemButton from "./svgs/ItemButton";
import strings from "../locales/en.json";

export const Card = styled.div`
  background-color: var(--color-card-bg);
  box-shadow: var(--color-card-shadow);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  width: 300px;
  min-width: 280px;
  max-width: 350px;
  flex: 1 1 300px;
  height: fit-content;
  padding: 1rem;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledTitle = styled.h3`
  padding: 0;
  margin: 0;

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: var(--color-link-hover);
    font-weight: 700;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: var(--color-link);

  &:hover {
    color: var(--color-link-hover);
  }
`;

const StyledDate = styled.p`
  font-weight: 600;
  color: var(--color-text-muted);
`;

const StyledContentText = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  color: var(--color-text);
`;

const StyledLinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--color-text-muted);
`;

const SkillButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
  gap: 0.5rem;
`;

const DateAndDemoLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  // justify-content: space-between;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;
`;

const SkillButtons = ({ skills }) => {
  return (
    <>
      {skills.map((bullet, index) => (
        <ItemButton title={bullet} key={index} />
      ))}
    </>
  );
};

const ProjectItem = ({
  projectTitle,
  date,
  content,
  skills,
  githubLink,
  demoLink,
  image,
}) => {
  const imageSrc = image ? `${process.env.PUBLIC_URL}/${image}` : null;

  return (
    <Card>
      {imageSrc &&
        (demoLink ? (
          <a href={demoLink} target="_blank" rel="noopener">
            <ProjectImage src={imageSrc} alt={projectTitle} />
          </a>
        ) : (
          <a href={githubLink} target="_blank" rel="noopener">
          <ProjectImage src={imageSrc} alt={projectTitle} />
          </a>
        ))
      }
      <StyledLink href={demoLink ? demoLink : githubLink} target="_blank" rel="noopener">
        <StyledTitle>{projectTitle}</StyledTitle>
      </StyledLink>
      <DateAndDemoLinkContainer>
        <StyledDate>{date}</StyledDate>
        {/* {demoLink && (
            <StyledLink href={demoLink} target="_blank" rel="noopener">
              {strings.projects_ui.tryItNow}
            </StyledLink>
        )} */}
      </DateAndDemoLinkContainer>

      <StyledContentText>{content}</StyledContentText>

      <SkillButtonContainer>
        <SkillButtons skills={skills} />
      </SkillButtonContainer>

      <StyledLinkContainer>
        <GitHubIcon width="25" height="25" link={githubLink} />
        {demoLink && (
          <StyledLink href={demoLink} target="_blank" rel="noopener">
            {strings.projects_ui.tryItNow}
          </StyledLink>
        )}
      </StyledLinkContainer>
    </Card>
  );
};

export default ProjectItem;
