import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

const CardContainer = styled.div`
  height: 17em;
  width: 14em;
  margin: 1.5em;
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 500ms;
  position: relative;
  :hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer = styled.div`
  height: 12em;
  width: 14em;
  background-color: gray;
  border-radius: 12px 12px 0 0;
`;

const PaperImage = styled.img`
  height: 12em;
  width: 14em;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`;

const TextContainer = styled.div`
  margin-top: 0.2em;
  margin-left: 0.5em;
`;

const PaperName = styled.h3`
  font-size: 1em;
  font-style: normal;
  font-weight: 500;
  margin-top: -0.2em;
`;

const PaperYear = styled.p`
  font-size: 0.9em;
  font-weight: 350;
  margin-top: -0.3em;
`;

const PaperTypeDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 1.5em;
  width: 3em;
  margin-right: 0.4em;
  margin-top: 0.1em;
  border-radius: 10px;
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaperType = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: ${colors.light};
`;

function Card({ paper }) {
  return (
    <CardContainer key={paper.id}>
      <ImageContainer>
        <PaperImage src={paper.imageUrl}></PaperImage>
      </ImageContainer>
      <PaperTypeDiv>
        <PaperType>{paper.paperCategory}</PaperType>
      </PaperTypeDiv>
      <TextContainer>
        <PaperName>{paper.title}</PaperName>
        <PaperYear>{paper.year}</PaperYear>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
