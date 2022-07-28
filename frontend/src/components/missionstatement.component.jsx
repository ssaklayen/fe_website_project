import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MissionStatement() {
  const msHighlight = "Energy storage systems";
  const msBody =
    "that integrate renewable energy onto the grid, replace fossil fuel plants, and increase grid reliability.";

  return (
    <Container className="p-0 pt-5 pb-4 missionStatementCustom">
      {/* Mission Statement Desktop */}

      <Row id="missionStatementDesktop">
        <Col></Col>
        <Col className="col-10 msWrapper">
          <h2>
            <span className="msCustom">{msHighlight}</span> {msBody}
          </h2>
        </Col>
        <Col></Col>
      </Row>

      {/* Mission Statement Mobile */}

      <Row id="missionStatementMobile">
        <Col className="msWrapper">
          <h2>
            <span className="msCustom">{msHighlight}</span> {msBody}
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
