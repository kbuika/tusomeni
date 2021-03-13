import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import { Link } from "react-router-dom";

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
  margin-top: -0.1em;
  color: ${colors.blue};
`;

const PaperYear = styled.p`
  font-size: 0.9em;
  font-weight: 550;
  margin-top: -0.3em;
  color: ${colors.blue};
`;

const TopDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0.4em;
  margin-top: 0.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TypeDiv = styled.div`
  height: 1.5em;
  width: auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 10px;
  margin-right: ${(props) => (props.space ? "0.3em" : "0")};
  background-color: ${colors.blue};
  display: flex;
  align-items: center;
`;

const Type = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: ${colors.light};
`;

function Card({ paper }) {
  return (
    <Link
      to={`/single-paper/${paper.id}?title=${paper.title}`}
      key={paper.id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <CardContainer key={paper.id}>
        <ImageContainer>
          <PaperImage
            src={paper.imageUrls[0].url}
            loading="lazy"
            alt={paper.title}
          ></PaperImage>
        </ImageContainer>
        <TopDiv>
          <TypeDiv space>
            <Type>{paper.yearOfStudy}</Type>
          </TypeDiv>
          <TypeDiv>
            <Type>{paper.courseType}</Type>
          </TypeDiv>
        </TopDiv>
        <TextContainer>
          <PaperName>{paper.title}</PaperName>
          <PaperYear>{paper.year}</PaperYear>
        </TextContainer>
      </CardContainer>
    </Link>
  );
}

export default Card;
