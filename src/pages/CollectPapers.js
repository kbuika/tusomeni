import React, { Component } from "react";
import styled from "styled-components";

class CollectPapers extends Component {
  render() {
    return (
      <MainDiv>
        {/* <h2>Coming Soon</h2> */}
        <p>
          If you're in 1st year or 2nd year. Keep all the papers for the upcoming exams and immediately you have all of them, email me 
          so I can buy the papers from you.
        </p>
        <p style={{width: '80%'}}>
          The papers will be bought on a bidding process. Whoever has the entire collection and the best bid wins!
        </p>
        <p style={{width: '80%'}}>
          Looking forward to your emails.
        </p>
        <p>You in?</p>
        <a href="mailTo:thekibuika@gmail.com">Email Kibuika</a>
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
