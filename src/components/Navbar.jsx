import React from "react";
import styled from "styled-components";
import "./styling/navbar.css";
import strings from "../locales/en.json";
import { ThemeToggle } from "./ThemeToggle";

const StyledHeading = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    props.bold ? "clamp(1rem, 2.5vw, 22px)" : "clamp(1rem, 2.5vw, 16px)"};
  font-weight: ${(props) => (props.bold ? 700 : 600)};

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: var(--color-nav-hover);
    font-weight: 700;
  }
`;

const SideOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem 1.25rem;
  min-width: 0;

  @media (max-width: 900px) {
    justify-content: flex-start;
    width: 100%;
  }
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
            <StyledHeading color="var(--color-nav-name)" bold>
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
              <StyledHeading color="var(--color-nav-link)">
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
              <StyledHeading color="var(--color-nav-link)">
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
              <StyledHeading color="var(--color-nav-link)">
                {strings.navbar.projects}
              </StyledHeading>
            </StyledSideOptionButton>
          </div>
          <div className="nav-theme-toggle">
            <ThemeToggle />
          </div>
        </SideOptionsContainer>
      </nav>
    </header>
  );
};

export default Navbar;
