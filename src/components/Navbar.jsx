import React from "react";
import styled from "styled-components";
import "./styling/navbar.css";
import { palette } from "./palette";
import strings from "../locales/en.json";

const StyledHeading = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    props.bold ? "clamp(1rem, 2.5vw, 22px)" : "clamp(1rem, 2.5vw, 16px)"};
  font-weight: ${(props) => (props.bold ? 700 : 600)};

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: #ad0a7cd7;
    font-weight: 700;
  }
`;

const SideOptionsContainer = styled.div`
  display: flex;
`;

const StyledSideOptionButton = styled.button`
  border-color: transparent;
  background: transparent;
  cursor: pointer;
`;

const Navbar = ({ aboutMeRef, experienceRef, projectsRef }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div>
          <a href={strings.links.homepage} className="nav-item">
            <StyledHeading color={palette.lightRed} bold>
              {strings.navbar.name}
            </StyledHeading>
          </a>
        </div>
        <SideOptionsContainer>
          <div className="side-item">
            <StyledSideOptionButton
              className="nav-item"
              onClick={() => {
                aboutMeRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <StyledHeading color={palette.fieryRed}>
                {strings.navbar.about}
              </StyledHeading>
            </StyledSideOptionButton>
          </div>
          <div className="side-item">
            <StyledSideOptionButton
              className="nav-item"
              onClick={() => {
                experienceRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <StyledHeading color={palette.fieryRed}>
                {strings.navbar.experience}
              </StyledHeading>
            </StyledSideOptionButton>
          </div>
          <div className="side-item">
            <StyledSideOptionButton
              className="nav-item"
              onClick={() => {
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <StyledHeading color={palette.fieryRed}>
                {strings.navbar.projects}
              </StyledHeading>
            </StyledSideOptionButton>
          </div>
        </SideOptionsContainer>
      </nav>
    </header>
  );
};

export default Navbar;
