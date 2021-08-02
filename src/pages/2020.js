import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

const MainDiv = styled.div`
  height: 75vh;
  background-color: ${colors.darkish};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5em;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: ${colors.blue};
  font-style: normal;
  font-weight: 350;
  text-align: center;
`;

function Twenty() {
  return (
    <MainDiv>
      <Description>
        We do not have access to 2020 papers since the results from that exam
        have to be registered completely and all issues resolved for as to be
        handed the papers. Worry not, Marjorie will make sure you have full
        access to them in the next academic year.
      </Description>
      <Description>Success in this one!</Description>
    </MainDiv>
  );
}

export default Twenty;
