import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

const MainDiv = styled.div`
  bottom: 0;
  background-color: ${colors.darkish};
  color: ${colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.p`
  font-size: 1em;
  font-weight: 700;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

function Footer() {
  return (
    <MainDiv>
      <CopyRight>&copy; Tusomeni. {new Date().getFullYear()}</CopyRight>
    </MainDiv>
  );
}

export default Footer;
