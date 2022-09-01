import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import experience_image from "../images/experience.png";
import innovative_image from "../images/innovative.png";
import passionate_image from "../images/passionate.png";

const Strength = (props) => {
  const slides = {
    header: ["Experience", "Innovative", "Passionate"],
    body: [
      "We are a team of energy storage veterans with a long track record of delivering operational and profitable projects.",
      "We continue to seek new ideas and to implement pioneering development strategies and first-of-a-kind products.",
      "We are on a mission to build the energy storage infrastructure necessary to enable the clean energy transition.",
    ],
    image: [experience_image, innovative_image, passionate_image],
  };

  return (
    <>
    <div className="strength-image-wrapper">
      <img src={slides.image[props.slide]} alt="Strength Image" />
    </div>
      <div className="strength-wrapper">
        <h4>{slides.header[props.slide]}</h4>
        <p>{slides.body[props.slide]}</p>
      </div>
    </>
  );
};

export default function Strengths() {
  return (
    <Container className="strengths-container">
      {/* Strengths Desktop */}
      <Row id="strengthsDesktop">
        <Col className="p-0">
          <Strength slide={0} />
        </Col>
        <Col className="p-0">
          <Strength slide={1} />
        </Col>
        <Col className="p-0">
          <Strength slide={2} />
        </Col>
      </Row>

      {/* Strengths Mobile */}
      <Row id="strengthsMobile">
        <Col className="p-0">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={4000}>
              <Strength slide={0} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Strength slide={1} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <Strength slide={2} />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
