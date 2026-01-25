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
`;

const AboutMeInnerContainer = styled.div`
  text-align: left;
  flex: 1;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const GreetingContainer = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-wrap: wrap;
`;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  max-height: 450px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ReachableContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
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
