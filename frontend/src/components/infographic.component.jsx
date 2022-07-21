import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import landAcquisitionImg from "../images/land_acquisition.png";
import greenfieldDevelopmentImg from "../images/greenfield_development.png";
import projectAcquisitionImg from "../images/project_acquisition.png";
import commercialStructuringImg from "../images/commercial_structuring.png";
import constructionProcurementImg from "../images/construction_procurement.png";
import operationBiddingImg from "../images/operation_bidding.jpg";

export default function Infographic() {
  const [hText, setHText] = React.useState("Land Acquisition");
  const [pText, setPText] = React.useState("We identify and acquire key land positions for energy storage projects via options, long-term leasing, and purchasing.");
  const [display, setDisplay] = React.useState("none");
  const [index, setIndex] = React.useState(0);

  function mouseOver(e) {
    switch (e.target.id) {
      case "landAcquisition":
        setIndex(0);
        setHText("Land Acquisition");
        setPText(
          "We identify and acquire key land positions for energy storage projects via options, long-term leasing, and purchasing."
        );
        setDisplay("block");
        break;

      case "greenfieldDevelopment":
        setIndex(1);
        setHText("Greenfield Development");
        setPText(
          "We manage the entire development process from early site analysis and identification through full entitlement and interconnection approval."
        );
        setDisplay("block");
        break;

      case "projectAcquisition":
        setIndex(2);
        setHText("Project Acquisition");
        setPText(
          "We also acquire early to mid-stage storage development projects and bring them to operation"
        );
        setDisplay("block");
        break;

      case "commercialStructuring":
        setIndex(3);
        setHText("Commercial Structuring");
        setPText(
          "We originate project offtake and revenue optimization through innovative power marketing, policy engagement, and partnerships."
        );
        setDisplay("block");
        break;

      case "constructionProcurement":
        setIndex(4);
        setHText("Construction & Procurement");
        setPText(
          "Our team leverages storage project management expertise and partnerships with market leaders to deliver projects on time and within budget."
        );
        setDisplay("block");
        break;

      case "operationBidding":
        setIndex(5);
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
          <div className="infoCustomCarouselWrapper">
            <div>
              <Carousel activeIndex={index} controls={false} indicators={false} fade={true}>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={landAcquisitionImg} alt="Land Acquisition" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={greenfieldDevelopmentImg} alt="Greenfield Development" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={projectAcquisitionImg} alt="Project Acquisition" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={commercialStructuringImg} alt="Commercial Structuring" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={constructionProcurementImg} alt="Construction and Procurement" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={operationBiddingImg} alt="Operation and Bidding" />
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="infoCustomImageText">
                <h3>{hText}</h3>
                <p>{pText}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}