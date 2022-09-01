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

  const MobileCard = (props) => {
    console.log(props);
    
    return (
      <>
        <li id={props.id} onClick={handleMouseClick}>
          <span
            id={props.id}
            className="fas fa-plus-circle"
          ></span>
          {props.title}
        </li>
        <div className="infographic-card-mobile">
          <img src={props.img} alt={props.title} width="95%" />
          <div className="infographic-card-caption-mobile">
            <p>{slide.body[props.slide]}</p>
          </div>
        </div>
      </>
    );
  };

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

  const [index, setIndex] = React.useState(0);
  const [infoHeight, setInfoHeight] = React.useState(getComputedStyle(document.documentElement).getPropertyValue("--info-mobile-height"));

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--info-mobile-height",
      infoHeight + "px"
    );
  }, [infoHeight]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function handleMouseOver(e) {
    const slideIndex = slide.id.indexOf(e.target.id);
    setIndex(slideIndex);
  }

  function handleMouseClick(e) {
    const slideText = document.getElementById(e.target.id).nextElementSibling;
    const slideIcon = document.getElementById(e.target.id).firstElementChild;
    const slideHeight = getComputedStyle(document.documentElement).getPropertyValue("--info-mobile-slide-size")
    let newHeight = 0;

    if (
      !slideText.classList.contains("animate-up") &&
      !slideText.classList.contains("animate-down")
    ) {
      slideText.classList.add("animate-down");
      newHeight = infoHeight + slideHeight;
    } else if (slideText.classList.contains("animate-up")) {
      slideText.classList.toggle("animate-up");
      slideText.classList.toggle("animate-down");
      newHeight = infoHeight + slideHeight;
    } else if (slideText.classList.contains("animate-down")) {
      slideText.classList.toggle("animate-up");
      slideText.classList.toggle("animate-down");
      newHeight = infoHeight - slideHeight;
    }

    slideIcon.classList.toggle("fa-plus-circle");
    slideIcon.classList.toggle("fa-minus-circle");
    setInfoHeight(newHeight);

    console.log(slideHeight);
  }

  return (
    // Infographic Desktop
    <Container className="pt-0">
      <div className="infographic-wrapper" id="infographicDesktop">
        <Row>
          <Col>
            <div className="infographic-text-panel">
              <h1>What We Do</h1>
              <div className="infographic-list-wrapper">
                <ul id="slideList">
                  <li id="landAcquisition" onMouseOver={handleMouseOver}>
                    <span
                      id="landAcquisition"
                      className="fas fa-warehouse"
                    ></span>
                    Land Acquisition
                  </li>
                  <li id="greenfieldDevelopment" onMouseOver={handleMouseOver}>
                    <span
                      id="greenfieldDevelopment"
                      className="fas fa-solar-panel"
                    ></span>
                    Greenfield Development
                  </li>
                  <li id="projectAcquisition" onMouseOver={handleMouseOver}>
                    <span
                      id="projectAcquisition"
                      className="fas fa-handshake"
                    ></span>
                    Project Acquisition
                  </li>
                  <li id="commercialStructuring" onMouseOver={handleMouseOver}>
                    <span
                      id="commercialStructuring"
                      className="fas fa-project-diagram"
                    ></span>
                    Commercial Structuring
                  </li>
                  <li
                    id="constructionProcurement"
                    onMouseOver={handleMouseOver}
                  >
                    <span
                      id="constructionProcurement"
                      className="fas fa-hard-hat fa-lg"
                    ></span>
                    Construction & Procurement
                  </li>
                  <li id="operationBidding" onMouseOver={handleMouseOver}>
                    <span
                      id="operationBidding"
                      className="fas fa-funnel-dollar"
                    ></span>
                    Operation & Bidding
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col>
            <div className="infographic-carousel-wrapper">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                fade={true}
              >
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img src={landAcquisitionImg} alt="Land Acquisition" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img
                      src={greenfieldDevelopmentImg}
                      alt="Greenfield Development"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img
                      src={projectAcquisitionImg}
                      alt="Project Acquisition"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img
                      src={commercialStructuringImg}
                      alt="Commercial Structuring"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img
                      src={constructionProcurementImg}
                      alt="Construction and Procurement"
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="infographic-carousel-image">
                    <img
                      src={operationBiddingImg}
                      alt="Operation and Bidding"
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="infographic-carousel-image-caption">
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
          </Col>
        </Row>
      </div>

      {/* Mobile View */}
      <div className="infographic-mobile-wrapper" id="infographicMobile">
        <Row>
          <Col>
            <div className="infographic-text-panel-mobile">
              <h1>What We Do</h1>
              <div className="infographic-list-wrapper-mobile">
                <ul id="slideList">

                  <li id="landAcquisitionMobile" onClick={handleMouseClick}>
                    <span
                      id="landAcquisitionMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Land Acquisition
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={landAcquisitionImg}
                      alt="Land Acquisition"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[0]}</p>
                    </div>
                  </div>

                  <li id="greenfieldDevelopmentMobile" onClick={handleMouseClick}>
                    <span
                      id="greenfieldDevelopmentMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Greenfield Development
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={greenfieldDevelopmentImg}
                      alt="Greenfield Development"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[1]}</p>
                    </div>
                  </div>

                  <li id="projectAcquisitionMobile" onClick={handleMouseClick}>
                    <span
                      id="projectAcquisitionMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Project Acquisition
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={projectAcquisitionImg}
                      alt="Project Acquisition"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[2]}</p>
                    </div>
                  </div>
                               
                  <li id="commercialStructuringMobile" onClick={handleMouseClick}>
                    <span
                      id="commercialStructuringMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Commercial Structuring
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={commercialStructuringImg}
                      alt="Commercial Structuring"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[3]}</p>
                    </div>
                  </div>

                  <li id="constructionProcurementMobile" onClick={handleMouseClick}>
                    <span
                      id="constructionProcurementMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Construction & Procurement
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={constructionProcurementImg}
                      alt="Construction & Procurement"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[4]}</p>
                    </div>
                  </div>

                  <li id="operationBiddingMobile" onClick={handleMouseClick}>
                    <span
                      id="operationBiddingMobile"
                      className="fas fa-plus-circle"
                    ></span>
                    Operation & Bidding
                  </li>
                  <div className="infographic-card-mobile">
                    <img
                      src={operationBiddingImg}
                      alt="Operation & Bidding"
                      width="95%"
                    />
                    <div className="infographic-card-caption-mobile">
                      <p>{slide.body[5]}</p>
                    </div>
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
