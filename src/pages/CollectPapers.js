import React, { Component } from "react";
import styled from "styled-components";

class CollectPapers extends Component {
  render() {
    return (
      <MainDiv>
        <h2>Coming Soon</h2>
        <p>We give you the ability to send us a paper</p>
        <p>
          Why it matters? Because someone else will send a paper that you need.
        </p>
      </MainDiv>
    );
  }
}

export default CollectPapers;

const MainDiv = styled.div`
  height: 70vh;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;
