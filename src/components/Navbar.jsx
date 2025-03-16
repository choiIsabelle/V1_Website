import React from "react";
import styled from "styled-components";
import './styling/navbar.css';
import { palette } from "./palette";

const StyledHeading = styled.p`
color: ${(props) => props.color};
font-size: 1.25rem;
font-weight: ${(props) => (props.bold ? 700 : 600)};

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: #ad0a7cd7;
    font-weight: 700;
  }
`

const SideOptionsContainer = styled.div`
display: flex;
`

const StyledSideOptionButton = styled.button`
border-color: transparent;
background: transparent;
cursor: pointer;
`

const Navbar=({aboutMeRef, experienceRef, projectsRef})=>{
    return(
        <header className="header">
          <nav className="navbar"> 
            <div>
                  <a 
                    href="https://choiisabelle.github.io/V1_Website/" 
                    className="nav-item"
                  >
                    <StyledHeading color={palette.lightRed} bold >ISABELLE CHOI</StyledHeading>
                 </a>
            </div>
            <SideOptionsContainer>
            <div className="side-item">
                  <StyledSideOptionButton 
                    className="nav-item" 
                    onClick={ () => {
                      aboutMeRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }}
                  >
                    <StyledHeading color={palette.fieryRed}>About Me</StyledHeading>
                 </StyledSideOptionButton>
            </div>
            <div className="side-item">
              <StyledSideOptionButton
                    className="nav-item" 
                    onClick={ () => {
                      experienceRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }}
              >
                    <StyledHeading color={palette.fieryRed}>Work Experience</StyledHeading>
                </StyledSideOptionButton>
            </div>
            <div className="side-item">
            <StyledSideOptionButton
                    className="nav-item" 
                    onClick={ () => {
                      projectsRef.current?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }}
            >
                    <StyledHeading color={palette.fieryRed}>Projects</StyledHeading>
              </StyledSideOptionButton>
            </div>
          </SideOptionsContainer>
        </nav>
      </header>    
    )
}

export default Navbar;