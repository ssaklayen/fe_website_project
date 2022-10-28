import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import careersBannerImage from "../images/careers_banner.png";
import respectIcon from "../images/handshake.png";
import excellenceIcon from "../images/excellence.png";
import candorIcon from "../images/trust.png";
import communityIcon from "../images/people.png";

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("careersLink");
    activeLink.classList.add("nav-link-active");
    document.documentElement.style.setProperty(
      "--nav-landowners-color",
      "#0b8040"
    );
  }, []);

  const bannerText = {
    header: "Careers",
    body:
      "If you are as excited about the energy transition to a cleaner, more flexible, and more reliable grid as we are, we want to hear from you.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={careersBannerImage}
        imageAlt="Careers"
        gradient="blue"
      />
      <hr className="mt-5" />

      <Container className="mt-5 job-openings-container">
        <div className="job-openings-text">
          <h1>Job Openings</h1>
          <p>
            We are a fast-growing startup with a dynamic, creative, fun,
            start-up culture. The right candidate will be excited to help build
            the company from the ground up and support our mission.
          </p>
          <div className="job-openings-button-wrapper">
            <div className="job-openings-button">
              <a
                href="https://www.linkedin.com/company/flatiron-energy/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See our job openings{" "}
                <span className="ms-2 fa-brands fa-linkedin"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="careers-values-header">
          <h1>Our Values Align With Our Culture</h1>
        </div>
      </Container>

      <Container className="p-0">
        <div className="careers-values-wrapper">
          <div className="careers-value">
            <img src={respectIcon} width="100" alt="Respect Icon" />
            <div className="ps-3 mt-3">
              <h4>Respect</h4>
              <p>
                We respect and embrace the diversity of our team and believe it
                makes us a stronger company.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={excellenceIcon} width="100" alt="Excellence Icon" />
            <div className="ps-3 mt-3">
              <h4>Excellence</h4>
              <p>
                We are committed to excellence in everything we do, every day,
                no exceptions.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={candorIcon} width="100" alt="Candor Icon" />
            <div className="ps-3 mt-3">
              <h4>Candor</h4>
              <p>
                We believe in absolute candor and are unfailingly curious and
                open to learning from mistakes.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={communityIcon} width="100" alt="Community Icon" />
            <div className="ps-3 mt-3">
              <h4>Community</h4>
              <p>
                We believe in the power of community to transform the global
                energy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
