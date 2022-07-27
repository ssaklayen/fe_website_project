import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function Strengths() {
  return (
    <Container className="strengthsCustom">
      {/* Strengths Desktop */}
      <Row id="strengthsDesktop">
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>Experienced</h4>
            <p>
              We are a team of energy storage veterans with a long track record
              of delivering operational and profitable projects.
            </p>
          </div>
        </Col>
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>Innovative</h4>
            <p>
              We continue to seek new ideas and to implement pioneering
              development strategies and first-of-a-kind products.
            </p>
          </div>
        </Col>
        <Col className="p-0">
          <div className="strengthWrapper">
            <h4>Passionate</h4>
            <p>
              We are on a mission to build the energy storage infrastructure
              needed to enable the clean energy transition.
            </p>
          </div>
        </Col>
      </Row>

      {/* Strengths Mobile */}
      <Row id="strengthsMobile">
        <Col className="p-0">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>Experienced</h4>
                <p>
                  Flatiron Energy is lead by a team of energy storage veterans
                  with a long track record of delivering operational and
                  profitable storage projects.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>Innovative</h4>
                <p>
                  We continue to seek new ideas and to implement pioneering
                  development strategies and first-of-a-kind products.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <div className="strengthWrapper">
                <h4>Passionate</h4>
                <p>
                  We are on a mission to build the energy storage infrastructure
                  needed to enable the clean energy transition.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
