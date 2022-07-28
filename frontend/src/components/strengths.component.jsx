import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const slides = {
  header: ["Experience", "Innovative", "Passionate"],
  body: [
    "We are a team of energy storage veterans with a long track record of delivering operational and profitable projects.",
    "We continue to seek new ideas and to implement pioneering development strategies and first-of-a-kind products.",
    "We are on a mission to build the energy storage infrastructure necessary to enable the clean energy transition.",
  ],
};

export default function Strengths() {
  return (
    <Container className="strengthsCustom">
      {/* Strengths Desktop */}
      <Row id="strengthsDesktop">
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>{slides.header[0]}</h4>
            <p>{slides.body[0]}</p>
          </div>
        </Col>
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>{slides.header[1]}</h4>
            <p>{slides.body[1]}</p>
          </div>
        </Col>
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>{slides.header[2]}</h4>
            <p>{slides.body[2]}</p>
          </div>
        </Col>
      </Row>

      {/* Strengths Mobile */}
      <Row id="strengthsMobile">
        <Col className="p-0">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>{slides.header[0]}</h4>
                <p>{slides.body[0]}</p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>{slides.header[1]}</h4>
                <p>{slides.body[1]}</p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>{slides.header[2]}</h4>
                <p>{slides.body[2]}</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
