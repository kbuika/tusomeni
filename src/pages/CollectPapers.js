import React, { Component } from "react";
import styled from "styled-components";

class CollectPapers extends Component {
  render() {
    return (
      <MainDiv>
        {/* <h2>Coming Soon</h2> */}
        <p>
          We are having a hard time getting papers from the administartion, so
          what better way than to collect from students?
        </p>
        <p style={{width: '80%'}}>
          If you have a proper past-papers collection, send an email to
           <a href="mailto:thekibuika@gmail.com"> thekibuika@gmail.com</a> indicating the papers you have and their
          respective years and you will receive compensations of up to <strong>KES 500</strong> or more.
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
