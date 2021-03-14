import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

const MainDiv = styled.div`
  bottom: 0;
  background-color: ${colors.darkish};
  color: ${colors.light};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2em;
`;

const IssuesDiv = styled.div`
  height: 5em;
  width: 100%;
  background-color: ${colors.darkish};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`;

const IssueText = styled.h3`
  font-size: 1em;
  font-weight: 600;
  padding-left: 0.5em;
  padding-right: 0.5em;
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
      <IssuesDiv>
        <IssueText>
          Got an issue, comment, recommendation, wish to collaborate or want to
          say 'hi'? Send us your message{" "}
          <a
            href="https://bit.ly/3bLmuRi"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            here
          </a>
        </IssueText>
      </IssuesDiv>
    <CopyRight>Built with &#10084; by Marjorie Muloma, Willy Ng'ang'a, Steve Kibuika and others. Wish to join the team? Fill this form <a
            href="https://bit.ly/3bLmuRi"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            here
          </a></CopyRight>
    </MainDiv>
  );
}

export default Footer;
