import React from "react";
import styled from "styled-components";
import { palette } from "./palette";
import { GitHubIcon } from "./svgs/GithubIcon";
import ItemButton from "./svgs/ItemButton";
import strings from "../locales/en.json";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
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
    color: #ad0a7cd7;
    font-weight: 700;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${palette.red};
`;

const StyledDate = styled.p`
  font-weight: 600;
  color: ${palette.grey};
`;

const StyledContentText = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
`;

const StyledLinkContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
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
      {imageSrc && <ProjectImage src={imageSrc} alt={projectTitle} />}
      <StyledLink href={demoLink ? demoLink : githubLink} target="_blank" rel="noopener">
        <StyledTitle >{projectTitle}</StyledTitle>
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
