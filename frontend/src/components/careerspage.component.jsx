import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import careersBannerImage from "../images/careers_banner.png";
import respectIcon from "../images/respect.png";
import excellenceIcon from "../images/excellence.png";
import candorIcon from "../images/candor.png";
import communityIcon from "../images/community.png";

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("careersLink");
    activeLink.classList.add("nav-link-active");
  }, []);

  const bannerText = {
    header: "Careers",
    body:
      "If you are as excited as we are about the transition to a cleaner, more flexible, and more reliable grid, we want to hear from you.",
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

      <Container className="job-openings-container">
        <div className="job-openings-text">
          <h1>Job Openings</h1>
          <p>
            We are a fast-growing team with a creative, dynamic start-up
            culture. The right candidate will be excited to help build the
            company from the ground up and support our mission.
          </p>
          <div className="job-openings-button-wrapper">
            <div className="job-openings-button">
              <a
                href="https://www.linkedin.com/company/flatiron-energy/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See our job listings{" "}
                <span className="ms-2 fa-brands fa-linkedin"></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <hr className="mt-5" />
      <Container className="p-0">
        <div className="careers-values-wrapper">
          <div className="careers-values-header">
            <h1>Our Core Values</h1>
          </div>
          <div className="careers-value">
            <img src={respectIcon} className="responsive" alt="Respect Icon" />
            <div className="careers-value-text">
              <h4>Respect</h4>
              <p>
                We respect and embrace the diversity of our team and believe it
                makes us a stronger company.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={excellenceIcon} alt="Excellence Icon" />
            <div className="careers-value-text">
              <h4>Excellence</h4>
              <p>
                We are committed to excellence in everything we do, no
                exceptions.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={candorIcon} alt="Candor Icon" />
            <div className="careers-value-text">
              <h4>Character</h4>
              <p>
                We believe in transparency, unfailing curiosity, and learning from our mistakes.
              </p>
            </div>
          </div>

          <div className="careers-value">
            <img src={communityIcon} alt="Community Icon" />
            <div className="careers-value-text">
              <h4>Community</h4>
              <p>
                We are dedicated to transforming the global energy ecosystem, improving local communities, and having fun while we do it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
