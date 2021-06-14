import React, { Component } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { breakpoints } from "../../Media";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel
        style={{ width: 100, height: 120 }}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        autoPlay
        showArrows={false}
      >
        <SlideDiv key="slide1">
          <h3>
            <em>
              Wishing you all the good luck in your exam. Ace it and crush the
              scoreboard!
            </em>
          </h3>
          <p>
            <strong>~ Marjorie Muloma</strong>
          </p>
        </SlideDiv>
        <SlideDiv key="slide2">
          <h3>
            <em>
              The Technical University of Kenya is big enough to accommodate all
              of our big dreams. I wish you success in your academics; both term
              and semester students, remember "Graduation ni harambee"
            </em>
          </h3>
          <p>
            <strong>
              ~ Mr. Africa Odhiambo Gura (INCOMING SATUK PRESIDENT)
            </strong>
          </p>
        </SlideDiv>
        <SlideDiv key="slide3">
          <h3>&#x1F60E; &#x1F60E; Term 2 papers now available!!</h3>
        </SlideDiv>
      </Carousel>
    );
  }
}

export default CarouselComponent;

const SlideDiv = styled.div`
  padding: 20;
  height: 180;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobileMin}) {
    height: 200;
    > h3 {
      font-size: 1em;
      line-height: 1.1;
    }
    > p {
      font-size: 0.8em;
    }
  }
`;
