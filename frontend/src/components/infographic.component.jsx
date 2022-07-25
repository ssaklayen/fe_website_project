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
  const slide = {
    id: [
      "landAcquisition",
      "greenfieldDevelopment",
      "projectAcquisition",
      "commercialStructuring",
      "constructionProcurement",
      "operationBidding",
    ],
    header: [
      "Land Acquisition",
      "Greenfield Development",
      "Project Acquisition",
      "Commercial Structuring",
      "Construction & Procurement",
      "Operation & Bidding",
    ],
    body: [
      "We identify and acquire key land positions for energy storage projects via options, long-term leasing, and purchasing.",
      "We manage the entire development process from early site analysis and identification through full entitlement and interconnection approval.",
      "We also acquire early to mid-stage storage development projects and bring them to operation",
      "We originate project offtake and revenue optimization through innovative power marketing, policy engagement, and partnerships.",
      "Our team leverages storage project management expertise and partnerships with market leaders to deliver projects on time and within budget.",
      "[Language TBD]",
    ],
  };

  // const [hText, setHText] = React.useState(slide.header[0]);
  // const [pText, setPText] = React.useState(slide.body[0]);
  const [index, setIndex] = React.useState(0);

  function liMouseOver(e) {
    const slideIndex = slide.id.indexOf(e.target.id);

    // setHText(slide.header[slideIndex]);
    // setPText(slide.body[slideIndex]);
    setIndex(slideIndex);

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
              <ul id="slideList">
                <li id="landAcquisition" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
                  Land Acquisition
                </li>
                <li id="greenfieldDevelopment" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
                  Greenfield Development
                </li>
                <li id="projectAcquisition" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
                  Project Acquisition
                </li>
                <li id="commercialStructuring" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
                  Commercial Structuring
                </li>
                <li id="constructionProcurement" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
                  Construction & Procurement
                </li>
                <li id="operationBidding" onMouseOver={liMouseOver}>
                  <span className="fas fa-arrow-alt-circle-right"></span>
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
              <Carousel
                activeIndex={index}
                controls={false}
                indicators={false}
                fade={true}
              >
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img src={landAcquisitionImg} alt="Land Acquisition" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img
                      src={greenfieldDevelopmentImg}
                      alt="Greenfield Development"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img
                      src={projectAcquisitionImg}
                      alt="Project Acquisition"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img
                      src={commercialStructuringImg}
                      alt="Commercial Structuring"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img
                      src={constructionProcurementImg}
                      alt="Construction and Procurement"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infoCustomImage">
                    <img
                      src={operationBiddingImg}
                      alt="Operation and Bidding"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="infoCustomImageText">
                <Carousel
                  activeIndex={index}
                  controls={false}
                  indicators={false}
                >
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[0]}</h3>
                      <p>{slide.body[0]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[1]}</h3>
                      <p>{slide.body[1]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[2]}</h3>
                      <p>{slide.body[2]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[3]}</h3>
                      <p>{slide.body[3]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[4]}</h3>
                      <p>{slide.body[4]}</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div>
                      <h3>{slide.header[5]}</h3>
                      <p>{slide.body[5]}</p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
