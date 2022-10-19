import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Banner from "./banner.component";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import energystorageBannerImage from "../images/energystorage_banner2.png";
import energystorageIconsImage from "../images/energystorage_icons.png";
import energystorageLoadLevelImage from "../images/energystorage_loadlevel.png";
import energystorageWarehouseImage from "../images/energystorage_warehouse.png";
import energystorageInspectionImage from "../images/energystorage_inspection.png";

export default function EnergyStoragePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("energystorageLink");
    activeLink.classList.add("nav-link-active");
    document.documentElement.style.setProperty(
      "--nav-landowners-color",
      "#004359"
    );
  }, []);

  const bannerText = {
    header: "Energy storage solutions",
    body:
      "Discover why Lithium Ion battery storage is leading the clean energy storage solutions in the industry.",
  };

  return (
    <Container className="content-container">
      <Banner
        header={bannerText.header}
        body={bannerText.body}
        image={energystorageBannerImage}
        imageAlt="Energy Storage Banner Image"
        gradient="green"
      />
      <Container className="p-0 mt-5 mb-5">
        <h1 style={{ textAlign: "center" }}>
          Battery Energy Storage Systems Diversify Resources
        </h1>
      </Container>
      <Container className="p-0">
        <img src={energystorageIconsImage} alt="Energy Storage Icon Image" />
      </Container>
      <Container className="p-0 energy-storage-row-header"> 
        <h1>This Is Why</h1>
      </Container>
      <Container className="p-0">
        <Row>
          <Col className="energy-storage-columns">
            <img src={energystorageLoadLevelImage} alt="Energy Storage Load Level Graph" />
          </Col>
          <Col className="energy-storage-columns">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col className="energy-storage-columns">
            <img src={energystorageWarehouseImage} alt="Energy Storage Warehouse" />
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <img src={energystorageInspectionImage} alt="Energy Storage Battery Costs" />
          </Col>
          <Col className="energy-storage-columns">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="p-0 energy-storage-row-footer">
        <h1>Lorem Ipsum</h1>
      </Container>
    </Container>
  );
}
