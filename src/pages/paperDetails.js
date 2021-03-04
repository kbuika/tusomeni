import React, { Component } from "react";
import styled from "styled-components";
import Loaders from "../components/Loader/Loader";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import { withRouter } from "react-router-dom";
// import queryString from "query-string";
import { colors } from "../resources/ThemeColors";
import { Redirect } from "react-router";

const MainDiv = styled.div`
  height: 80vh;
  width: auto;
  margin: 0;
`;

const DisplayContainer = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

const Error = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  color: ${colors.blue};
`;

let images = [
  {
    url: "https://tusome-app.herokuapp.com/api/v1/images/getImage/61",
    title: "Test Image",
  },
];

// let images = [];

class paperDetails extends Component {
  state = {
    isError: false,
    isLoading: false,
    data: null,
    navigate: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { id } = this.props.match.params;
    this.fetchData(id);
    this.setState({ isLoading: false });
  }

  async fetchData(id) {
    let i = 0;
    const response = await fetch(
      `https://tusome-app.herokuapp.com/api/v1/papers/getPaper/${id}`
    );
    const json = await response.json();
    console.log(json);
    let newData = json.imageUrls.map((obj) => ({
      ...obj,
      title: json.title + i++,
    }));
    let Data = newData.forEach(function (element) {
      delete element.id;
    });
    console.log(Data);
    newData.forEach(function (element) {
      var obj = {};
      obj["title"] = element.title;
      obj["url"] = element.url;
      images.push(obj);
    });
    this.setState({ data: newData });
  }

  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
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
        <DisplayContainer>
          <Lightbox
            images={images}
            startIndex={1}
            onClose={() => this.setState({ navigate: true })}
          />
        </DisplayContainer>
      </MainDiv>
    );
  }
}

export default withRouter(paperDetails);
