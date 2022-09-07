import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StepCard from "./stepcard.component";

export default function LandownersSteps() {
  const landownersText =
    "Earn stable, long-term revenue and attractive returns by leasing or selling your property to Flatiron Energy";

  return (
    <div className="mt-5 landowners-steps-wrapper">
      <h1>{landownersText}</h1>
      <hr />
      <h2>HOW IT WORKS</h2>
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
      <hr />
    </div>
  );
}
