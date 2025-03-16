import React from 'react'
import styled from 'styled-components'
import {palette} from './palette'
import { LocationIcon } from './svgs/LocationIcon'
import {OpenLinkIcon} from './svgs/OpenLinkIcon'
import ItemButton from './svgs/ItemButton'

const StyledHeading = styled.h3`
  font-weight: 650;
  font-size: clamp(14px, 2vw, 18px); /* Adjust text size responsively */
  color: ${(props) => props.color};
`

const StyledText = styled.p`
  font-weight: 500;
  font-size: clamp(0.9rem, 2vw, 1rem); 
  color: ${(props) => props.color};
   margin: 0.6rem 0; /* Reduce vertical spacing */
`

const StyledBulletItem = styled.p`
  font-weight: 500;
`

const StyledHeadingContainer = styled.div`
  display: flex;
  gap: 0.45rem;
  align-items: center;
`

const StyledList = styled.ul`
  list-style-position: inside;
  padding: 0;
  margin: 0;
`

const StyledListItem = styled.li`
  font-weight: 500;
  list-style-position: inside;
  padding-left: 0;
  margin-left: 0; 
`
const StyledExperienceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
`

const StyledSkillButtonContainer = styled.div`
margin-top: 0.75rem;
display: flex;
gap: 0.5rem;
`

const ExperienceTitle = ({ title, company, location, companyLink, date }) => {
  return (
    <StyledHeadingContainer>
      <StyledHeading>{title}</StyledHeading>
      <StyledHeading color={palette.lightRed}> @ {company}</StyledHeading>
      <LocationIcon width={20} height={20} color={palette.grey} />
      <StyledHeading color={palette.grey}>{location}</StyledHeading>
      <OpenLinkIcon width={23} height={23} link={companyLink} />
    </StyledHeadingContainer>
  )
}

const ExperienceBody = ({ experienceBullets }) => {
    return (
      <StyledList>
        {experienceBullets.map((bullet, index) => (
          <StyledListItem key={index}>{bullet}</StyledListItem>
        ))}
      </StyledList>
    )
  }

const SkillButtons=({skills})=>{
    return (
        <>
            {skills.map((bullet,index)=>(
              <ItemButton title={bullet} key={index}/>
            ))}
        </>
    )
}


const ExperienceSection = (props) => {
  const { title, company, location, companyLink, experienceBullets, date, skills } = props

  return (
    <StyledExperienceContainer>
      <ExperienceTitle 
        title={title} 
        company={company} 
        location={location} 
        companyLink={companyLink} 
      />
      <StyledText color={palette.grey}>{date}</StyledText>
      <ExperienceBody experienceBullets={experienceBullets} />
      <StyledSkillButtonContainer>
        <SkillButtons skills={skills}/>
      </StyledSkillButtonContainer>
    </StyledExperienceContainer>
  )
};

export default ExperienceSection
