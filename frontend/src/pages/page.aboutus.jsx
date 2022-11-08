import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/page.aboutus.css";

import Banner from "./components/banner.component";

import aboutusBannerImage from "./images/flatirons2.png";
import bcorpLogo from "./images/bcorplogo3.png";
import jonImage from "./images/jon.jpg";
import brettImage from "./images/brett.jpg";
import julianaImage from "./images/juliana.jpg";
import robImage from "./images/rob.jpg";

// import batteryIcon from "../images/battery_icon2.png";
// import cityIcon from "../images/city_icon2.png";
// import powerlinesIcon from "../images/powerlines_icon2.png";
// import warehouseIcon from "../images/warehouse_icon2.png";

export function TeamCard(props) {
  const memberNames = [
    "Jon Poor",
    "Brett Cullin",
    "Juliana Mandell",
    "Robert Brink",
  ];

  const memberInfo = [
    "Jon has 24 years of experience working in the energy industry and 8 years in standalone storage. He has held leadership roles in development, consulting, project management, and engineering.",
    "Brett has 13 years of experience working in the energy industry and 5 years in standalone storage. He has held leadership roles in greenfield development, acquisitions, finance, and transmission modeling.",
    "Juliana has 13 years of experience working in the energy industry and 8 years in standalone storage. She has held leadership roles in greenfield development, acquisitions, market development, and regulatory affairs.",
    "Rob has 16 years of experience working in energy, consulting, and finance and 8 years in standalone storage. He has held leadership roles in acquisitions, financing, and battery optimization.",
  ];

  const memberRoles = [
    "Leadership roles in greenfield development, acquisitions, market development, and regulatory affairs",
    "Leadership roles in greenfield development, acquisitions, finance, and transmission modeling.",
    "Leadership roles in development, consulting, project management, and engineering.",
    "Leadership roles in acquisitions, financing, and battery optimization",
  ];

  const memberImages = [jonImage, brettImage, julianaImage, robImage];

  return (
    <Container className="about-us-team-container">
      <img src={memberImages[props.card]} alt={memberNames[props.card]} />
      <h4>{memberNames[props.card]}</h4>
      <a
        href="https://www.linkedin.com/in/sabir-saklayen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fa-brands fa-linkedin"></span> Profile
      </a>
      <div className="about-us-team-text mt-1">
        <p>{memberInfo[props.card]}</p>
        {/* <p>{memberRoles[props.card]}</p> */}
      </div>
    </Container>
  );
}

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("aboutusLink");
    activeLink.classList.add("nav-link-active");
  }, []);

  const bannerText = {
    header: "About Us",
    body:
      "The Flatiron Energy team has deep expertise in energy storage project development, construction, finance, and asset optimization.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={aboutusBannerImage}
        imageAlt="About Us Team Image"
        gradient="blue"
      />
      <Container className="about-us-mission-container">
        <h1>Our Mission</h1>
        <div className="about-us-mission-wrapper">
          <a
            href="https://www.bcorporation.net/en-us/certification"
            target="_blank"
            rel="noopener noreferrer"
            className="link-fade"
          >
            <img src={bcorpLogo} alt="B Corp Logo" />
          </a>
          <p>
            To reduce emissions that contribute to climate change and
            environmental injustice through the development of utility-scale
            energy storage projects.
          </p>
        </div>
      </Container>
      <hr />
      <Container className="about-us-partners-container">
        <h1>Managing Partners</h1>

        <div>
          <Row className="mt-5">
            <Col>
              <TeamCard card={0} />
            </Col>
            <Col>
              <TeamCard card={1} />
            </Col>
            <Col>
              <TeamCard card={2} />
            </Col>
            <Col>
              <TeamCard card={3} />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

{
  /* <div className="about-us-map-container">
        <div className="about-us-map-text">
          <p>Technology has advanced the way energy is produced</p>
          <h2>Flatiron Energy is leading the transition.</h2>
          <p>
            Flatiron Energy develops, acquires, and operates energy
            infrastructure, including technically advanced utility-scale energy
            storage facilities.
          </p>
        </div>
        <div className="about-us-icon-container">
          <Row>
            <Col className="about-us-icon-text">
              <h4>$65 Million</h4>
              <p>Invested in energy storage assets</p>
              <img
                src={batteryIcon}
                className="about-us-icon-container-image"
                alt="Battery Icon"
              />
            </Col>
            <Col className="about-us-icon-text">
              <h4>$7 Billion</h4>
              <p>Investment Opportunity</p>
              <img
                src={warehouseIcon}
                className="about-us-icon-container-image"
                alt="Warehouse Icon"
              />
            </Col>
            <Col className="about-us-icon-text">
              <h4>21 GW</h4>
              <p>Current project Pipeline</p>
              <img
                src={powerlinesIcon}
                className="about-us-icon-container-image"
                alt="Powerlines Icon"
              />
            </Col>
            <Col className="about-us-icon-text">
              <h4>65+ Years</h4>
              <p>Leadership Team Industry Experience</p>
              <img
                src={cityIcon}
                className="about-us-icon-container-image"
                alt="City Icon"
              />
            </Col>
          </Row>
        </div>
      </div> */
}
