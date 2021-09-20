import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Media";
import { colors } from "../resources/ThemeColors";

const HeaderContainer = styled.div`
  height: auto;
  width: 100vw;
  overflow: hidden;
  background-color: ${colors.darkish};
  padding-left: 2em;
  padding-right: 0em;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5em;
  padding-bottom: 0.5em;
  top: 0;
  position: fixed;
  z-index: 1;

  @media (max-width: ${breakpoints.mobileMin}) {
    padding-right: 1em;
    padding-left: 1em;
    height: auto;
  }

  @media (min-width: ${breakpoints.mobileMin}) and (max-width: ${breakpoints.mobileMax}) {
  }
`;

const LogoDiv = styled.div`
  left: 0;
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${breakpoints.mobileMin}) {
  }
`;

const Title = styled.a`
  text-decoration: none;
  font-style: normal;
  font-family: sans-serif;
  font-size: 1.6em;
  font-weight: 500;
  margin-left: 0.3em;
  color: ${colors.light};

  @media (max-width: ${breakpoints.mobileMin}) {
    font-size: 1.1em;
  }
`;

const NavLinksDiv = styled.div`
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: space-evenly;
  justify-content: center;
  margin-right: 5%;
`;

const NavLink = styled.a`
  font-size: 1.1em;
  font-weight: 400;
  font-family: Semi-bold 600;
  text-decoration: none;
  color: ${colors.light};
  margin-right: 1em;
  margin-left: 1em;
  border-bottom: 1px solid white;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoDiv>
        <Title href="/">Tusomeni.</Title>
      </LogoDiv>
      <NavLinksDiv>
        {/* <NavLink href="/">Home</NavLink> */}
        {/* <NavLink href="/2020-papers">Where are 2020 papers?</NavLink> */}
        <NavLink
          href="https://github.com/kibuikaCodes/tusomeni"
          target="_blank"
          rel="no referrer"
        >
          Source Code
        </NavLink>
      </NavLinksDiv>
    </HeaderContainer>
  );
}

export default Header;
