import React, { Component } from "react";
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
  height: auto;
`;

const DisplayContainer = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 3em 3em 2em;
`;

const Error = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  color: ${colors.blue};
`;

class HomePage extends Component {
  state = {
    isError: false,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://tusome-app.herokuapp.com/api/v1/papers/getAllPapers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
        this.setState({ isLoading: false });
      })
      .catch((error) => this.setState({ isError: true, isLoading: false }));
  }

  render() {
    return (
      <MainDiv>
        {this.state.isError && (
          <DisplayContainer>
            <Error>Something went wrong... try agin later</Error>
          </DisplayContainer>
        )}
        {this.state.isLoading && (
          <DisplayContainer>
            <Loaders />
            <Error>Morio, punguza sup..</Error>
          </DisplayContainer>
        )}
        <CardsContainer>
          {this.state.data.map((paper) => (
            <Card paper={paper} />
          ))}
        </CardsContainer>
      </MainDiv>
    );
  }
}

export default HomePage;
