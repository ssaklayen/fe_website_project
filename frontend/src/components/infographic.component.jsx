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
      "We acquire early to mid-stage storage development projects and bring them to operation",
      "We originate project offtake and revenue optimization through innovative power marketing, policy engagement, and partnerships.",
      "Our team leverages storage project management expertise and partnership with market leaders to deliver profitable projects.",
      "We own and operate our storage assets. Through active management we ensure performance and revenue optimization.",
    ],
  };

  // const [hText, setHText] = React.useState(slide.header[0]);
  // const [pText, setPText] = React.useState(slide.body[0]);
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  function liMouseOver(e) {
    const slideIndex = slide.id.indexOf(e.target.id);

    // setHText(slide.header[slideIndex]);
    // setPText(slide.body[slideIndex]);
    setIndex(slideIndex);
  }

  return (
    // Infographic Desktop
    <Container className="pt-0">
      <div className="infoCustom" id="infographicDesktop">
        <Row>
          {/* List */}
          <Col>
            <div className="infoCustomText">
              <h1>What We Do</h1>
              <div className="infoListWrapper">
                <ul id="slideList">
                  <li id="landAcquisition" onMouseOver={liMouseOver}>
                    <span
                      id="landAcquisition"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Land Acquisition
                  </li>
                  <li id="greenfieldDevelopment" onMouseOver={liMouseOver}>
                    <span
                      id="greenfieldDevelopment"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Greenfield Development
                  </li>
                  <li id="projectAcquisition" onMouseOver={liMouseOver}>
                    <span
                      id="projectAcquisition"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Project Acquisition
                  </li>
                  <li id="commercialStructuring" onMouseOver={liMouseOver}>
                    <span
                      id="commercialStructuring"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Commercial Structuring
                  </li>
                  <li id="constructionProcurement" onMouseOver={liMouseOver}>
                    <span
                      id="constructionProcurement"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Construction & Procurement
                  </li>
                  <li id="operationBidding" onMouseOver={liMouseOver}>
                    <span
                      id="operationBidding"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
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
                  onSelect={handleSelect}
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
                    onSelect={handleSelect}
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
      </div>

      {/* Mobile View */}
      <div className="infoCustomMobile" id="infographicMobile">
        <Row>
          <Col>
            <div className="infoCustomTextMobile">
              <h1>What We Do</h1>
              <div className="infoListWrapperMobile">
                <ul id="slideList">
                  <li id="landAcquisition">
                    <span
                      id="landAcquisition"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Land Acquisition
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[0]}</p>
                  </div>

                  <li id="greenfieldDevelopment">
                    <span
                      id="greenfieldDevelopment"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Greenfield Development
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[1]}</p>
                  </div>

                  <li id="projectAcquisition">
                    <span
                      id="projectAcquisition"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Project Acquisition
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[2]}</p>
                  </div>

                  <li id="commercialStructuring">
                    <span
                      id="commercialStructuring"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Commercial Structuring
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[3]}</p>
                  </div>

                  <li id="constructionProcurement">
                    <span
                      id="constructionProcurement"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Construction & Procurement
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[4]}</p>
                  </div>

                  <li id="operationBidding">
                    <span
                      id="operationBidding"
                      className="fas fa-arrow-alt-circle-right"
                    ></span>
                    Operation & Bidding
                  </li>
                  <div className="infographicMobileText">
                    <p>{slide.body[5]}</p>
                  </div>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
