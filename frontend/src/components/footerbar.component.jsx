import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import logo from "../images/fe_logo_420_260.png";
import symbol from "../images/fe_logo_symbol_297_185.png";
import bcorpwhite from "../images/bcorpwhite.png";

export default function FooterBar() {
  return (
    <footer className="footerCustom">
      <Container>

        {/* Footer Desktop */}
        <Row id="footerDesktop">
          {/* Company Block */}
          <Col>
            <h5>Company</h5>
            <Link to="/landowners">
              <p>Landowners</p>
            </Link>
            <Link to="/energystorage">
              <p>Energy Storage</p>
            </Link>
            <Link to="/aboutus">
              <p>About Us</p>
            </Link>
          </Col>

          {/* Contact Block */}
          <Col>
            <h5>Contact</h5>
            <p>2101 Pearl St<br />Boulder, CO 80302<br />(630) 697-9270</p>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
          </Col>

          {/* B Corp Logo Block  */}
          <Col className="verticalCenterLogo">
            <a href="https://www.bcorporation.net/en-us/certification">
              <img src={bcorpwhite} width="320" alt="B Corporation Certified" />
            </a>
          </Col>

          {/* Fe Logo & Copyright Block */}
          <Col className="symbolCustom">
            <img src={symbol} width="200" alt="Flatiron Energy Symbol" />
            <p>Copyright © 2022<br />Flatiron Energy LLC</p>
          </Col>
        </Row>

        {/* Footer Mobile*/}
        <Row id="footerMobile">
          {/* B Corp Logo Block  */}
          <Col className="verticalCenterLogo">
            <a href="https://www.bcorporation.net/en-us/certification">
              <img src={bcorpwhite} width="190rem" alt="B Corporation Certified" />
            </a>
          </Col>

          {/* Fe Logo & Copyright Block */}
          <Col className="symbolCustom">
            <img src={symbol} width="120rem" alt="Flatiron Energy Symbol" />
            <p>Copyright © 2022<br />Flatiron Energy LLC</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}
