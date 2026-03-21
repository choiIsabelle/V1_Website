import React, { forwardRef } from "react";
import styled from "styled-components";
import "./styling/aboutme.css";
import { SocialLinks } from "./SocialLinks";
import { PersonalImageOutlineBox } from "./PersonalImage";
import { palette } from "./palette";
import * as c from "./CustomComponents";
import strings from "../locales/en.json";

const AboutMeText = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutMeInnerContainer = styled.div`
  text-align: left;
  flex: 1;
  max-width: 500px;
  min-width: 0;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
    text-align: center;
  }
`;

const GreetingContainer = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1050px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ReachableContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${palette.red};
  font-size: clamp(14px, 2vw, 18px);
`;

const AboutMeTextBlock = () => {
  return (
    <div>
      <AboutMeText>{strings.aboutMe.description}</AboutMeText>
    </div>
  );
};

export const AboutMe = forwardRef((props, ref) => {
  const NameHeading = ({ isName, content }) => (
    <c.NameText isPink={isName}>{content}</c.NameText>
  );

  return (
    <AboutMeWrapper id="AboutMe_Wrapper" ref={ref}>
      <AboutMeInnerContainer id="AboutMe_InnerContainer">
        <GreetingContainer>
          <NameHeading content={strings.aboutMe.greeting} />
          <NameHeading isName={true} content={strings.aboutMe.name} />
        </GreetingContainer>
        <AboutMeTextBlock />
        <LinksContainer>
          <SocialLinks height={35} width={35} dark />
        </LinksContainer>
        <ReachableContainer>
          <AboutMeText>{strings.aboutMe.reachableAt}</AboutMeText>
          <StyledLink href={strings.socialLinks.emailUrl}>
            {strings.aboutMe.email} {strings.aboutMe.emailEmoji}
          </StyledLink>
        </ReachableContainer>
      </AboutMeInnerContainer>
      <PersonalImageOutlineBox />
    </AboutMeWrapper>
  );
});
