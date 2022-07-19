import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import urbanImage from "../images/urbanImage.jpg";

export default function Infographic() {
  const [hText, setHText] = React.useState("");
  const [pText, setPText] = React.useState("");
  const [display, setDisplay] = React.useState("none");

  function mouseOver(e) {
    switch (e.target.id) {
      case "landAcquisition":
        setHText("Land Acquisition");
        setPText(
          "We identify and acquire key land positions for energy storage projects via options, long-term leasing, and purchasing."
        );
        setDisplay("block");
        break;

      case "greenfieldDevelopment":
        setHText("Greenfield Development");
        setPText(
          "We develop utility-scale standalone energy storage projects. We manage the entire development process from early site analysis and identification through full entitlement and interconnection approval."
        );
        setDisplay("block");
        break;

      case "projectAcquisition":
        setHText("Project Acquisition");
        setPText(
          "We also acquire early to mid-stage storage development projects and bring them to operation"
        );
        setDisplay("block");
        break;

      case "commercialStructuring":
        setHText("Commercial Structuring");
        setPText(
          "We originate project offtake and revenue optimization through innovative power marketing, policy engagement, and partnerships."
        );
        setDisplay("block");
        break;

      case "constructionProcurement":
        setHText("Construction & Procurement");
        setPText(
          "Our team leverages storage project management expertise and partnerships with market leaders to deliver projects on time and within budget."
        );
        setDisplay("block");
        break;

      case "operationBidding":
        setHText("Operation & Bidding");
        setPText("[Language TBD]");
        setDisplay("block");
        break;
        
      default:
        setDisplay("none");
    }
  }

  function mouseLeave() {
    setDisplay("none");
  }

  return (
    // Infographic Desktop
    <Container className="pt-0 infoCustom" id="infographicDesktop">
      <Row>
        {/* List */}
        <Col>
          <div className="infoCustomText">
            <h1>What We Do</h1>
            <div className="infoListWrapper">
              <ul>
                <li
                  id="landAcquisition"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Land Acquisition
                </li>
                <li
                  id="greenfieldDevelopment"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Greenfield Development
                </li>
                <li
                  id="projectAcquisition"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Project Acquisition
                </li>
                <li
                  id="commercialStructuring"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Commercial Structuring
                </li>
                <li
                  id="constructionProcurement"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Construction & Procurement
                </li>
                <li
                  id="operationBidding"
                  onMouseOver={mouseOver}
                  onMouseLeave={mouseLeave}
                >
                  Operation & Bidding
                </li>
              </ul>
            </div>
          </div>
        </Col>

        {/* Image */}
        <Col>
          <div className="infoCustomImage">
            <img src={urbanImage} alt="Urban Energy Network" />
            <div className="infoCustomImageText" style={{ display: display }}>
              <h3>{hText}</h3>
              <p>{pText}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
