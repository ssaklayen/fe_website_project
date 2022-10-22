import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import aboutusBannerImage from "../images/aboutus_banner.png";
import bcorpLogo from "../images/bcorplogo.png";
import teamMemberImage from "../images/me.png";
import batteryIcon from "../images/battery_icon.png";
import cityIcon from "../images/city_icon.png";
import powerlinesIcon from "../images/powerlines_icon.png";
import warehouseIcon from "../images/warehouse_icon.png";

export function TeamCard(props) {
  return (
    <div className="about-us-team-container">
      <img src={teamMemberImage} alt="me" />
      <h4>Sabir Saklayen</h4>
      <h5>Chief of Web Design</h5>
      <a href="https://www.linkedin.com/in/sabir-saklayen">
        <span className="fa-brands fa-linkedin"></span> Profile
      </a>
      <div className="mt-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
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
    document.documentElement.style.setProperty(
      "--nav-landowners-color",
      "#004359"
    );
  }, []);

  const bannerText = {
    header: "About us",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      <Container className="ps-4 mt-5">
        <h1 style={{ color: "#004359", fontWeight: "700" }}>Our Mission</h1>
        <div className="about-us-mission-container">
          <img src={bcorpLogo} alt="B Corp Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Container>
      <hr />
      <Container className="ps-4 mt-5">
        <h1 style={{ color: "#0b8040", fontWeight: "700" }}>Our Leaders</h1>

        <div>
          <Row className="mt-5">
            <Col align="center">
              <TeamCard />
            </Col>
            <Col align="center">
              <TeamCard />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col align="center">
              <TeamCard />
            </Col>
            <Col align="center">
              <TeamCard />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="about-us-map-container">
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
            <Col>
            <h4>$65 Million</h4>
            <p>Invested in energy storage assets</p>
              <img src={batteryIcon} className="about-us-icon-container-image" alt="Battery Icon" />
            </Col>
            <Col>
            <h4>$7 Billion</h4>
            <p>Investment Opportunity</p>
              <img src={warehouseIcon} className="about-us-icon-container-image" alt="Warehouse Icon" />
            </Col>
            <Col>
            <h4>21 GW</h4>
            <p>Current project Pipeline</p>
              <img src={powerlinesIcon} className="about-us-icon-container-image" alt="Powerlines Icon" />
            </Col>
            <Col>
            <h4>80 + Years</h4>
            <p>Leadership Team Industry Experience</p>
              <img src={cityIcon} className="about-us-icon-container-image" alt="City Icon" />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
