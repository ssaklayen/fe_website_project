import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/page.energystorage.css";

import Banner from "./components/banner.component";

import energystorageBannerImage from "./images/energystorage_banner2.png";
import energystorageIconsImage from "./images/energystorage_icons.png";
import energystorageLoadLevelImage from "./images/energystorage_loadlevel.png";
import energystorageWarehouseImage from "./images/energystorage_warehouse.png";
import energystorageInspectionImage from "./images/energystorage_inspection.png";

export default function EnergyStoragePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach((navlink) => {
      navlink.classList.remove("nav-link-active");
    });
    let activeLink = document.getElementById("energystorageLink");
    activeLink.classList.add("nav-link-active");
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
        gradient="blue"
      />
      <Container className="energy-storage-icon-heading">
        <h1>
          Battery Energy Storage Systems can provide power for Diversified
          Resources
        </h1>
      </Container>
      <Container className="energy-storage-icon-image-container">
        <img src={energystorageIconsImage} alt="Energy Storage Icon Image" />
      </Container>
      <Container className="p-0 energy-storage-row-header">
        <h1>This Is Why</h1>
      </Container>

      <Container id="energyStorageDesktop" className="p-0">
        <Row>
          <Col className="energy-storage-columns">
            <img
              src={energystorageLoadLevelImage}
              alt="Energy Storage Load Level Graph"
            />
          </Col>
          <Col className="energy-storage-columns">
            <p>
              Battery storage facilities are able to draw power from the grid to
              charge when demand is low. These storage units will intelligently
              send power back to the grid when demand is high. This relieves
              stress of the electric grid and helps reduce the negative impact
              of peak demand periods.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <div>
              <h2>Battery Storage Facilities</h2>
              <ul>
                <li>Occupy a small footprint of land</li>
                <li>Have a 3-6 month installation duration</li>
                <li>Zero emissions and zero noise</li>
                <li>No traffic during operations</li>
              </ul>
            </div>
          </Col>
          <Col className="energy-storage-columns">
            <img
              src={energystorageWarehouseImage}
              alt="Energy Storage Warehouse"
            />
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <img
              src={energystorageInspectionImage}
              alt="Energy Storage Inspection"
            />
          </Col>
          <Col className="energy-storage-columns">
            <p>
              Analytics and technical on-site monitoring can be customized to
              meet your organization’s unique needs. If you’re in an environment
              that experiences all four seasons, battery energy storage has
              multiple dispatch modes that can easily meet your power and
              electrical needs throughout the day.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="energyStorageMobile" className="p-0">
        <Row>
          <Col className="energy-storage-columns">
            <img
              src={energystorageLoadLevelImage}
              alt="Energy Storage Load Level Graph"
            />
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <p>
              Battery storage facilities are able to draw power from the grid to
              charge when demand is low. These storage units will intelligently
              send power back to the grid when demand is high. This relieves
              stress of the electric grid and helps reduce the negative impact
              of peak demand periods.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <img
              src={energystorageWarehouseImage}
              alt="Energy Storage Warehouse"
            />
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <div>
              <h2>Battery Storage Facilities</h2>
              <ul>
                <li>Occupy a small footprint of land</li>
                <li>Have a 3-6 month installation duration</li>
                <li>Zero emissions and zero noise</li>
                <li>No traffic during operations</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <img
              src={energystorageInspectionImage}
              alt="Energy Storage Inspection"
            />
          </Col>
        </Row>
        <Row>
          <Col className="energy-storage-columns">
            <p>
              Analytics and technical on-site monitoring can be customized to
              meet your organization’s unique needs. If you’re in an environment
              that experiences all four seasons, battery energy storage has
              multiple dispatch modes that can easily meet your power and
              electrical needs throughout the day.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="p-0 energy-storage-row-footer">
        <h3>
          As power and transportation converge and the world’s energy demands
          move to large-scale wind and solar projects, large-scale energy
          storage projects provide the missing piece to keep the electric grid
          stable.
        </h3>
      </Container>
    </Container>
  );
}
