import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function ContactInformation() {
  return (
    <Container className="mt-5 contactInformationOuterWrapper">
      <div className="contactInformationInnerWrapper">
        <Row>
          <div className="contactInfoWrapper">
            <h4>Careers</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Row>
        <Row>
          <div className="contactInfoWrapper">
            <h4>Property Sales</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Row>
        <Row>
          <div className="contactInfoWrapper">
            <h4>Feedback</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </Row>
      </div>
    </Container>
  );
}
