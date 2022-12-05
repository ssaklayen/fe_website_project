import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import $ from "jquery";
import "./css/page.aboutus.css";

import Banner from "./components/banner.component";

import aboutusBannerImage from "./images/aboutus_banner.jpg";
import bcorpLogo from "./images/bcorp_logo.png";
import jonImage from "./images/jon.jpg";
import brettImage from "./images/brett.jpg";
import julianaImage from "./images/juliana.jpg";
import robImage from "./images/rob.jpg";

export default function AboutUsPage() {
  const [partnerIndex, setPartnerIndex] = React.useState([0]);

  const partnerNames = [
    "Jon Poor",
    "Brett Cullin",
    "Juliana Mandell",
    "Robert Brink",
  ];

  const partnerID = ["jonID", "brettID", "julianaID", "robID"];

  const partnerInfo = [
    "Jon leads operations and development at Flatiron. He previously held leadership roles in development, consulting, project management, and engineering at ENGIE, National Grid, and General Electric. Jon brings 24 years of experience working in the energy industry and 8 years in standalone storage to his role.",
    "Brett leads development efforts across the Flatiron portfolio. He previously held leadership roles in greenfield development, acquisitions, finance, and transmission modeling at ENGIE, Socore Energy, and Navigant. Brett brings 13 years of experience working in the energy industry and 5 years in standalone storage to his role.",
    "Juliana leads commercial operations and development at Flatiron. She previously held leadership roles in greenfield development, acquisitions, market development, and regulatory affairs at ENGIE, Green Charge Networks, and General Electric. Juliana brings 13 years of experience working in the energy industry and 8 years in standalone storage to her role.",
    "Rob leads financing and acquisitions at Flatiron. He previously held leadership roles in acquisitions, financing, and battery optimization at ENGIE, Advanced Microgrid Solutions, and General Electric. Rob brings 16 years of experience working in the energy, consulting, and finance industries and 8 years in standalone storage to his role.",
  ];

  const partnerLinkedIn = [
    "https://www.linkedin.com/in/jonathan-poor-a83347/",
    "https://www.linkedin.com/in/brett-cullen-18763aa/",
    "https://www.linkedin.com/in/juliana-mandell-4052ab21/",
    "https://www.linkedin.com/in/brinkrob/",
  ];

  function handleClick() {
    let partnerBio = document.getElementById("partnerBio");
    let partnerModal = document.getElementById("partnerModal");
    let partnerModalBio = document.getElementById("partnerModalBio");

    partnerBio.classList.add("locked");
    partnerBio.style.display = "none";
    partnerModal.style.visibility = "visible";
    partnerModalBio.style.display = "block";
  }

  function handleMouseEnter(props) {
    let partnerBio = document.getElementById("partnerBio");
    if (!partnerBio.classList.contains("locked")) {
      setPartnerIndex(parseInt(props.target.id));
      let navbarHeight = $("#feNavbar").outerHeight();
      let clientWidth = $("body").innerWidth();
      let windowTop = $(window).scrollTop() + navbarHeight;
      let partnerIDTopPosition = $(
        "#" + partnerID[parseInt(props.target.id)]
      ).position().top;
      let windowDistance = partnerIDTopPosition - windowTop;
      if (clientWidth > 767) {
        if (windowDistance < 281) {
          document.documentElement.style.setProperty(
            "--partner-bio-top",
            `${windowDistance + 525}px`
          );
        } else {
          document.documentElement.style.setProperty(
            "--partner-bio-top",
            `${windowDistance - 55}px`
          );
        }
        partnerBio.style.display = "block";
      } else {
        document.documentElement.style.setProperty("--partner-bio-top", `50%`);
        handleClick();
      }
    }
  }

  function handleMouseOut(props) {
    let partnerBio = document.getElementById("partnerBio");
    let currentElement = document.elementFromPoint(
      props.clientX,
      props.clientY
    );
    if (
      !partnerBio.classList.contains("locked") &&
      currentElement != null &&
      currentElement.parentElement != null &&
      currentElement.parentElement != partnerBio &&
      currentElement.parentElement.parentElement != partnerBio
    ) {
      partnerBio.style.display = "none";
    }
  }

  function handleClose() {
    let partnerBio = document.getElementById("partnerBio");
    let partnerModal = document.getElementById("partnerModal");
    let partnerModalBio = document.getElementById("partnerModalBio");
    partnerBio.style.display = "none";
    partnerModal.style.visibility = "hidden";
    partnerModalBio.style.display = "none";
    partnerBio.classList.remove("locked");
  }

  function handlePartnerMouseOut() {
    let partnerBio = document.getElementById("partnerBio");
    partnerBio.style.display = "none";
  }

  function PartnerCard(props) {
    const memberImages = [jonImage, brettImage, julianaImage, robImage];
    return (
      <Container className="about-us-partner-container">
        <div
          className="img-hover-zoom"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
          onClick={handleClick}
          id={partnerID[props.card]}
        >
          <img
            src={memberImages[props.card]}
            alt={partnerNames[props.card]}
            id={props.card}
          />
        </div>
        <h4>{partnerNames[props.card]}</h4>
      </Container>
    );
  }

  useEffect(() => {
    let navbarLinks = document.querySelectorAll(".nav-link");
    let activeLink = document.getElementById("aboutusLink");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    activeLink.classList.add("nav-link-active");

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const bannerText = {
    header: "About Us",
    body:
      "The Flatiron Energy team has deep expertise in energy storage project development, construction, finance, and asset optimization.",
  };

  return (
    <>
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={aboutusBannerImage}
        imageAlt="About Us Team Image"
        gradient="blue"
      />
      <Container className="content-container">
        <Container className="about-us-mission-container">
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
              Our mission at Flatiron Energy is to reduce emissions that
              contribute to climate change and environmental injustice through
              the development of utility-scale energy storage projects.
            </p>
          </div>
        </Container>
        <hr />
        <Container className="about-us-partners-container">
          <h1>Managing Partners</h1>

          <div className="mt-5">
            <Row xl={2} xxl="auto" className="justify-content-md-between">
              <Col align="center">
                <PartnerCard card={0} />
              </Col>
              <Col align="center">
                <PartnerCard card={1} />
              </Col>
              <Col align="center">
                <PartnerCard card={2} />
              </Col>
              <Col align="center">
                <PartnerCard card={3} />
              </Col>
            </Row>
          </div>

          <div
            id="partnerBio"
            className="partner-bio"
            onMouseLeave={handlePartnerMouseOut}
          >
            <div className="partner-bio-header">
              <h2>{partnerNames[partnerIndex]}</h2>
              <span className="partner-bio-close" onClick={handleClose}>
                &times;
              </span>
            </div>
            <div className="partner-bio-body">
              <p>{partnerInfo[partnerIndex]}</p>
            </div>
            <div className="partner-bio-footer">
              <a
                href={partnerLinkedIn[partnerIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line-blue"
                onClick={handleClose}
              >
                <span className="fa-brands fa-linkedin"></span> Profile
              </a>
            </div>
          </div>

          <div id="partnerModal" className="partner-modal">
            <div id="partnerModalBio" className="partner-bio">
              <div className="partner-bio-header">
                <h2>{partnerNames[partnerIndex]}</h2>
                <span className="partner-bio-close" onClick={handleClose}>
                  &times;
                </span>
              </div>
              <div className="partner-bio-body">
                <p>{partnerInfo[partnerIndex]}</p>
              </div>
              <div className="partner-bio-footer">
                <a
                  href={partnerLinkedIn[partnerIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line-blue"
                  onClick={handleClose}
                >
                  <span className="fa-brands fa-linkedin"></span> Profile
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
