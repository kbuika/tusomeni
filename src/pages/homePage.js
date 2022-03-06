import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Filter from "../components/FilterComponent/Filter";
import Loaders from "../components/Loader/Loader";
import { colors } from "../resources/ThemeColors";
import { breakpoints } from "../Media";
import CarouselComponent from "../components/Carousel/Carousel";
import { Helmet } from "react-helmet";

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
        this.setState({ data });
        console.table(data);
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tusomeni | A past-papers platform.</title>
          <meta
            name="description"
            content="Tusomeni is a past-paper platform for Computing students at The Technical University of Kenya. We aggregate papers from previous exams and let students use them for revision."
          />
        </Helmet>
        <NotifyDiv>Do you know you can get up to <strong>KES 500</strong>&#x1F911; for sending us your past-papers? <a href="/submit-paper" style={{color: "white"}}>Alaa, show me how &#8594;</a></NotifyDiv>
        {/* <CarouselDiv>
          <CarouselComponent />
        </CarouselDiv> */}
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
            <Error>Loading, Please wait...</Error>
          </DisplayContainer>
        )}
        {this.state.searchData.length !== 0 && (
          <CardsContainer>
            {this.state.searchData.map((paper) => (
              <Card paper={paper} key={paper.id} />
            ))}
          </CardsContainer>
        )}
        {this.state.searchData.length === 0 && (
          <CardsContainer>
            {this.state.data.map((paper) => (
              <Card paper={paper} key={paper.id}/>
            ))}
          </CardsContainer>
        )}
      </MainDiv>
    );
  }
}

export default HomePage;

const MainDiv = styled.div`
  height: auto;
  width: 100%;
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
  align-items: stretch;
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
  background-color: #6665ba;
  z-index: 0;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  font-weight: 400;
  font-size: 1em;
`;

const CarouselDiv = styled.div`
  width: 90vw;
  height: 20vh;
  margin: 3em;
  @media (max-width: ${breakpoints.mobileMin}) {
    height: 25vh;
    margin: 2em;
  }
`;
