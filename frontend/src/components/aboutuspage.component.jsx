import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mainBannerImage from "../images/main_banner.png";
import bcorpLogo from "../images/bcorplogo.png";
import teamMemberImage from "../images/me.png";

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
        image={mainBannerImage}
        imageAlt="Mountain Energy Storage"
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
        
      </div>
    </Container>
  );
}
