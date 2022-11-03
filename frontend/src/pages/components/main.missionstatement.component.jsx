import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MissionStatement() {
  const msHighlight = "Energy storage systems";
  const msBody =
    "that integrate renewable energy onto the grid, replace fossil fuel plants, and increase grid reliability.";

  return (
    <Container className="p-0 pt-5 pb-4 mt-mission-statement">
      <Row>
        <Col>
          <div className="mission-statement-wrapper">
            <h2>
              <span>{msHighlight}</span> {msBody}
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
