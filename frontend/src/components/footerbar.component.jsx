import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import fe_symbol from "../images/fe_symbol2.png";
import bcorpwhitepending from "../images/bcorpwhitepending.png";

export default function FooterBar() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-image"></div>
        <Container>
          {/* Footer Desktop */}
          <Row id="footerDesktop">
            {/* Company Block */}
            <Col>
            <div className="w-50 mx-auto">
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
            </div>
          </Col>

            {/* Contact Block */}
            <Col>
              <div className="w-50 mx-auto">
                <h5>Contact</h5>
                <p>
                  2101 Pearl St
                  <br />
                  Boulder, CO 80302
                  <br />
                  (630) 697-9270
                </p>
                <Link to="/contact">
                  <p>Contact Us</p>
                </Link>
              </div>
            </Col>

            {/* B Corp Logo Block  */}
            <Col className="footer-bcorp-logo">
              <a href="https://www.bcorporation.net/en-us/certification">
                <img
                  src={bcorpwhitepending}
                  width="310"
                  alt="B Corporation Certified"
                />
              </a>
            </Col>

            {/* Fe Logo & Copyright Block */}
            <Col className="footer-fe-symbol">
              <Link to="/">
                <img src={fe_symbol} width="200" alt="Flatiron Energy Symbol" />
                <p>
                  Copyright © 2022
                  <br />
                  Flatiron Energy LLC
                </p>
              </Link>
            </Col>
          </Row>

          {/* Footer Mobile*/}
          <Row id="footerMobile">
            {/* B Corp Logo Block  */}
            <Col className="footer-bcorp-logo">
              <a href="https://www.bcorporation.net/en-us/certification">
                <img
                  src={bcorpwhitepending}
                  width="190rem"
                  alt="B Corporation Certified"
                />
              </a>
            </Col>

            {/* Fe Logo & Copyright Block */}
            <Col className="footer-fe-symbol">
              <Link to="/">
                <img src={fe_symbol} width="120rem" alt="Flatiron Energy Symbol" />
                <p>
                  Copyright © 2022
                  <br />
                  Flatiron Energy LLC
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
