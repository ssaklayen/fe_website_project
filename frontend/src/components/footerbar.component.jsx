import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// import logo from "../images/fe_logo_420_260.png";
import symbol from "../images/fe_logo_symbol_297_185.png";
import bcorpwhitepending from "../images/bcorpwhitepending.png";
import hullstreetenergy from "../images/hullstreetenergy.png";

export default function FooterBar() {
  return (
    <footer>
      <div className="footerInvestor">
        <img className="footerInvestorImg" src={hullstreetenergy} alt="Hull Street Energy" />
        <p>
          Hull Street Energy invests in companies that are strategically
          positioned for growth as North America transitions to a more sustainable future
        </p>
      </div>
      <div className="footerCustom">
        <div className="footerImage"></div>
        <Container>
          {/* Footer Desktop */}
          <Row id="footerDesktop">
            {/* Company Block */}
            {/* <Col>
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
          </Col> */}

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
            <Col className="verticalCenterLogo">
              <a href="https://www.bcorporation.net/en-us/certification">
                <img
                  src={bcorpwhitepending}
                  width="300"
                  alt="B Corporation Certified"
                />
              </a>
            </Col>

            {/* Fe Logo & Copyright Block */}
            <Col className="symbolCustom">
              <img src={symbol} width="200" alt="Flatiron Energy Symbol" />
              <p>
                Copyright © 2022
                <br />
                Flatiron Energy LLC
              </p>
            </Col>
          </Row>

          {/* Footer Mobile*/}
          <Row id="footerMobile">
            {/* B Corp Logo Block  */}
            <Col className="verticalCenterLogo">
              <a href="https://www.bcorporation.net/en-us/certification">
                <img
                  src={bcorpwhitepending}
                  width="190rem"
                  alt="B Corporation Certified"
                />
              </a>
            </Col>

            {/* Fe Logo & Copyright Block */}
            <Col className="symbolCustom">
              <img src={symbol} width="120rem" alt="Flatiron Energy Symbol" />
              <p>
                Copyright © 2022
                <br />
                Flatiron Energy LLC
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
