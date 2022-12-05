import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./banner.component.css";

export default function Banner(props) {
  return (
    <div>
      <Row id="bannerDesktop">
        <Col className="g-0 banner-column">
          <div className="banner-text">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
        </Col>

        <Col className="g-0">
          <div className="banner-image-wrapper">
            <img src={props.image} alt={props.imageAlt} />
          </div>
        </Col>
      </Row>

      <Row id="bannerMobile">
        <Col className="g-0 banner-column">
          <div className="banner-wrapper-mobile">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
          <div className="banner-image-wrapper-mobile">
            <img src={props.image} alt={props.imageAlt} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
