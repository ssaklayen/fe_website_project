import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StepCard from "./stepcard.component";

export default function LandownersSteps() {
  return (
    <>
      <div className="landowners-steps-wrapper">
        <h2>HOW IT WORKS</h2>
      </div>
      <div className="landowners-steps-inner-wrapper">
        <Row className="mt-5">
          <Col md={12} lg={6} xl={4}>
            <StepCard card={0} />
          </Col>
          <Col md={12} lg={6} xl={4}>
            <StepCard card={1} />
          </Col>
          <Col md={12} lg={12} xl={4}>
            <StepCard card={2} />
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
}
