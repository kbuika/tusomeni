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
    searchText: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://tusome-app.herokuapp.com/api/v1/papers/getAllPapers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
        this.setState({ isLoading: false });
      })
      .catch((error) => this.setState({ isError: true, isLoading: false }));
  }

  onSearchTitle = (e) => {
    if(e.target.value === null) {
      return
    }
    const { data, searchText } = this.state;
    this.setState({ isLoading: true });
    let newData = []
    let searchString = searchText?.toLowerCase().split(" ");
    data.filter((item) => {
      // let containsAtLeastOneWord = false;
      // If at least a word is matched return it!
      searchString.forEach((word) => {
        if (item.title.toLowerCase().includes(word))
        newData.push(item);
      });
    });
    this.setState({ isLoading: false, data: [...new Set(newData)] });

  };

  updateText = (e) => {
    this.setState({ searchText: e.target.value });
  }

  clearSearch = () => {
    this.setState({ searchText: null });
    this.setState({ isLoading: true });
    fetch("https://tusome-app.herokuapp.com/api/v1/papers/getAllPapers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
        this.setState({ isLoading: false });
      })
      .catch((error) => this.setState({ isError: true, isLoading: false }));
  }

  render() {
    const { isError, isLoading, data, searchData } = this.state;
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
        {/* <NotifyDiv>
          Do you know you can get up to <strong>KES 500</strong>&#x1F911; for
          sending us your past-papers?{" "}
          <a href="/submit-paper" style={{ color: "white" }}>
            Alaa, show me how &#8594;
          </a>
        </NotifyDiv> */}
        <FilterComponent>
          <input onChange={this.updateText} placeholder="Search paper by name"></input><i onClick={this.clearSearch}>X</i><button onClick={this.onSearchTitle}>{isLoading ? 'Searching' : 'Search'}</button>
        </FilterComponent>
        {isError && (
          <DisplayContainer>
            <Error>Something went wrong... try agin later</Error>
          </DisplayContainer>
        )}
        {isLoading && (
          <DisplayContainer>
            <Loaders />
            <Error>Loading, Please wait...</Error>
          </DisplayContainer>
        )}
        {(data?.length !== 0 && !isLoading) && (
          <CardsContainer>
            {data?.reverse().map((paper) => (
             <Card paper={paper} key={paper?.id} />
            ))}
          </CardsContainer>
        )}
        {} {(data?.length === 0 && !isLoading) && (
          <CardsContainer>
            <p>No results found</p>
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
  margin: 3.5em 0 0 0;
  z-index: -1;
  background-color: ${colors.darkish};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  
`;

const FilterComponent = styled.div`
  margin-top: 4em;
  width: 40vw;

  >input {
    width: 70%;
    height: 2em;
    border: none;
    border-radius: 5px 0px 0px 5px;
    padding-left: 1em;
    :focus {
      outline: none;
    }
    @media (max-width: ${breakpoints.mobileMin}) {
      width: 50vw;
    }
  }
  >i {
    font-size: 1em;
    background-color: white;
    color: #464491;
    border: none;
    padding: .11em 1em .3em 0;
    cursor: pointer;
    @media (max-width: ${breakpoints.mobileMin}) {
      padding: .11em .5em .3em 0;
    }
  }
  >button {
    height: 2.2em;
    border: none;
    border-radius: 0px 5px 5px 0px;
    background-color: #464491;
    color: white;
    width: 20%;
    cursor: pointer;
    @media (max-width: ${breakpoints.mobileMin}) {
      width: 30vw;
    }
  }
  @media (max-width: ${breakpoints.mobileMin}) {
    width: 90vw;
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
  background-color: #464491;
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
