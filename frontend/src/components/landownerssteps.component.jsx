import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StepCard from "./stepcard.component";

export default function LandownersSteps() {
  const landownersText =
    "Earn stable, long-term revenue and attractive returns by leasing or selling your property to Flatiron Energy";

  return (
    <div className="landowners-steps-wrapper">
      <h1>{landownersText}</h1>
      <hr />
      <Row className="mt-5">
        <Col>
          <StepCard card={0} />
        </Col>
        <Col>
          <StepCard card={1} />
        </Col>
        <Col>
          <StepCard card={2} />
        </Col>
      </Row>
    </div>
  );
}
