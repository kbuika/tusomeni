import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

const MainDiv = styled.div`
  height: 75vh;
  background-color: ${colors.light};
  display: flex;
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

function AboutPage() {
  return (
    <MainDiv>
      <Description>
        Tusomeni is an online past-paper repository for the School of Computing
        and Information Technology classes at The Technical University of Kenya.{" "}
      </Description>
      <Description>
        More stuff is coming soon to a browser near you.&#128640; &#128640;
      </Description>
    </MainDiv>
  );
}

export default AboutPage;
