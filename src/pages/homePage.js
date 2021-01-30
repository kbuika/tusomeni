import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";
import Loaders from "../components/Loader/Loader";
import { colors } from "../resources/ThemeColors";

const MainDiv = styled.div`
  height: auto;
  width: auto;
  margin: 0;
`;

const CardsContainer = styled.div`
  margin: 2em 3em 3em 2em;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
`;

const DisplayContainer = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  color: ${colors.blue};
`;

function HomePage() {
  const [data, setData] = useState([]);
  const url =
    "https://cors-anywhere.herokuapp.com/https://tusome-app.herokuapp.com/api/v1/papers/getAllPapers";
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        console.table("The data", result.data);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <MainDiv>
      {isError && (
        <DisplayContainer>
          <Error>Something went wrong... try agin later</Error>
        </DisplayContainer>
      )}
      {isLoading && (
        <DisplayContainer>
          <Loaders />
          <Error>Morio, punguza sup..</Error>
        </DisplayContainer>
      )}
      <CardsContainer>
        {data.map((paper) => (
          <Card paper={paper} />
        ))}
      </CardsContainer>
    </MainDiv>
  );
}

export default HomePage;

// https://tusome-app.herokuapp.com/api/v1/papers/getAllPapers
