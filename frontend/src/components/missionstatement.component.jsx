import React from "react";
import Container from "react-bootstrap/Container";


export default function MissionStatement() {
  return (
    <Container className="p-0 pt-5">

          {/* Mission Statement Desktop */}
          <div className="mt-3 msWrapper" id="missionStatementDesktop">
            <h2>Game-changing the way enterprises and</h2>
            <h2>
              households get{" "}
              <span className="msCustom">carbon free energy</span>.
            </h2>
          </div>

          {/* Mission Statement Mobile */}
          <div className="mt-3 msWrapper" id="missionStatementMobile">
            <h2>Game-changing the way</h2>
            <h2>enterprises and households get{" "}</h2>
            <h2>
              <span className="msCustom">carbon free energy</span>.
            </h2>
          </div>
          
    </Container>
  );
}
