import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/FilterComponent/Filter";
import Loaders from "../components/Loader/Loader";
import { colors } from "../resources/ThemeColors";
import { breakpoints } from "../Media";

const MainDiv = styled.div`
  height: auto;
  width: auto;
  margin: 0;
  z-index: -1;
  background-color: ${colors.darkish};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = styled.div`
  margin-top: 2em;
  width: 40vw;
  @media (max-width: ${breakpoints.mobileMin}) {
    width: 60vw;
  }
`;

const CardsContainer = styled.div`
  margin: 1.5em 3em 0em 2em;
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

const NotifyDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 3.5em;
  background-color: yellow;
  z-index: 1;
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  color: ${colors.darkish};
  font-weight: 400;
`;

class HomePage extends Component {
  state = {
    isError: false,
    isLoading: false,
    data: [],
    searchData: [],
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

  onHandleSearch = (selectedOption) => {
    const { data } = this.state;
    var newArray = data.filter(function (el) {
      return el.yearOfStudy === selectedOption.value;
    });
    this.setState({ searchData: newArray });
  };

  render() {
    return (
      <MainDiv>
        <NotifyDiv>&#127882; Success in your exams..</NotifyDiv>
        <FilterComponent>
          <Filter onSearch={this.onHandleSearch} />
        </FilterComponent>
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
        {this.state.searchData.length !== 0 && (
          <CardsContainer>
            {this.state.searchData.map((paper) => (
              <Card paper={paper} />
            ))}
          </CardsContainer>
        )}
        {this.state.searchData.length === 0 && (
          <CardsContainer>
            {this.state.data.map((paper) => (
              <Card paper={paper} />
            ))}
          </CardsContainer>
        )}
      </MainDiv>
    );
  }
}

export default HomePage;
