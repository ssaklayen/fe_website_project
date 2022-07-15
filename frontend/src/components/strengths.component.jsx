import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function Strengths() {
  return (
    <Container className="pt-5 strengthsCustom">
      {/* Strengths Desktop */}
      <Row id="strengthsDesktop">
        <Col className="p-0">
          <h4>Experienced</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </Col>
        <Col className="p-0">
          <h4>Innovative</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </Col>
        <Col className="p-0">
          <h4>Passionate</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </Col>
      </Row>

      {/* Strengths Mobile */}
      <Row id="strengthsMobile">
        <Col className="p-0">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={5000}>
              <h4>Experienced</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <h4>Innovative</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <h4>Passionate</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
