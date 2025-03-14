import styled from "styled-components";
import './styling/navbar.css';
import { palette } from "./palette";

const StyledHeading = styled.p`
font-weight: 650;
color: ${(props) => props.color};
font-size: 1.25rem;

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: #ad0a7cd7;
    font-weight: 700;
  }
`

const Navbar=()=>{
    return(
        <header className="header">
          <nav className="navbar">
              <div className="navbar-nav">
                  <a href="https://choiisabelle.github.io/V1_Website/" className="nav-item">
                    <StyledHeading color={palette.lightRed}>ISABELLE CHOI</StyledHeading>
                 </a>
            </div>
            {/* <div className="side-item">
                  <a href="https://choiisabelle.github.io/V1_Website/" className="nav-item" rel="noopener noreferrer">
                    <StyledHeading color={palette.lightRed}>Projects</StyledHeading>
                 </a>
            </div> */}
        </nav>
      </header>    
    )
}

export default Navbar;