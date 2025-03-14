import styled from 'styled-components'
import './styling/aboutme.css'
import { SocialLinks } from './SocialLinks'
import { PersonalImageOutlineBox } from './PersonalImage'
import { OutlineButton } from './OutlineButton'
import { palette } from './palette'
import * as c from './CustomComponents'

const AboutMeText = styled.p`
    text-align: left;
    font-weight: 500;
    font-size: clamp(14px, 2vw, 18px); /* Adjust text size responsively */
    line-height: 1.5;
`;

const AboutMeInnerContainer = styled.div`
    text-align: left;
    flex: 1; /* Allows it to expand based on available space */
    max-width: 500px; 
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    // padding: 1rem;
`;

const GreetingContainer = styled.div`
    gap: 0.75rem;
    display: flex;
    flex-wrap: wrap;
`;

const AboutMeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; /* Stacks content on smaller screens */
    gap: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    max-width: 1200px;
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
font-size: clamp(14px, 2vw, 18px); /* Adjust text size responsively */
`

const AboutMeTextBlock = () => {
    return (
        <div>
            <AboutMeText>
                I am a 3rd-year Computer Science CO-OP student at the University of Ottawa. I expect to graduate by January 2027.
                I have 12 months of work experience including front-end development and DevOps. I am most proficient in Typescript and React.
                I am deeply curious about creating unique solutions to problems utilizing technology. My goal is to gain experience in as many areas
                spanning the software development lifecycle as possible.
            </AboutMeText>
        </div>
    );
};

export const AboutMe = () => {
    const NameHeading = ({ isName, content }) => (
        <c.NameText isPink={isName}>{content}</c.NameText>
    );

    return (
        <AboutMeWrapper id="AboutMe_Wrapper">
            <AboutMeInnerContainer id="AboutMe_InnerContainer">
                <GreetingContainer>
                    <NameHeading content={"Hey! I'm "} />
                    <NameHeading isName={true} content={"Isabelle."} />
                </GreetingContainer>
                <AboutMeTextBlock />
                <LinksContainer>
                    <SocialLinks height={35} width={35} dark />
                    <OutlineButton title="Download Resume" fileUrl="/resume.txt" color={palette.red} icon />
                </LinksContainer>
                <ReachableContainer><AboutMeText>I am reachable at</AboutMeText><StyledLink href="mailto:isabellelissina@gmail.com">IsabelleLissina@gmail.com ✏️</StyledLink></ReachableContainer>
            </AboutMeInnerContainer>
            <PersonalImageOutlineBox />
        </AboutMeWrapper>
    );
};
