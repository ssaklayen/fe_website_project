import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MissionStatement() {
  return (
    <Container className="p-0 pt-5 pb-4">
      {/* Mission Statement Desktop */}
      {/* <div className="mt-3" id="missionStatementDesktop">
        <h2>Game-changing the way enterprises and</h2>
            <h2>
              households get{" "}
              <span className="msCustom">carbon free energy</span>.
            </h2>
        <div className="msWrapper">
          
          <h2>
            Energy storage systems that integrate renewable energy onto the
            grid, replace fossil fuel plants, and increase grid reliability
          </h2>
        </div>
      </div> */}
      <Row id="missionStatementDesktop">
        <Col></Col>
        <Col className="col-10 msWrapper">
          <h2>
            <span className="msCustom">Energy storage systems</span>{" "}that
            integrate renewable energy onto the grid, replace fossil fuel
            plants, and increase grid reliability.
          </h2>
        </Col>
        <Col></Col>
      </Row>

      {/* Mission Statement Mobile */}
      {/* <div className="mt-3 msWrapper" id="missionStatementMobile">
        <h2>Game-changing the way</h2>
        <h2>enterprises and households get </h2>
        <h2>
          <span className="msCustom">carbon free energy</span>.
        </h2>
      </div> */}
      <Row id="missionStatementMobile">
        <Col className="msWrapper">
          <h2>
            Energy storage systems that integrate{" "}
            <span className="msCustom">renewable energy</span> onto the grid,
            replace fossil fuel plants, and increase grid reliability.
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
