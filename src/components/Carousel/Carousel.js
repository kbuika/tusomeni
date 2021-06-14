import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel style={{ width: 100 }} infiniteLoop>
        <div key="slide1" style={{ padding: 20, height: 150, color: "white" }}>
          <h3>Term 2 papers now available!!</h3>
        </div>
        <div key="slide2" style={{ padding: 20, height: 150, color: "white" }}>
          <h3>
            <em>
              Wishing you all the good luck in your exam. Ace it and crush the
              scoreboard!
            </em>
          </h3>
          <p>
            <strong>~ Marjorie Muloma</strong>
          </p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselComponent;
