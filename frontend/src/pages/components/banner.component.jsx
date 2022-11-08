import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./banner.component.css";

export default function Banner(props) {
  React.useEffect(() => {
    if (props.gradient === "blue") {
      document.documentElement.style.setProperty("--banner-gs", "#40666a");
      document.documentElement.style.setProperty("--banner-ge", "#004359");
      document.documentElement.style.setProperty(
        "--banner-text-color",
        "#FFFFFF"
      );
    }
    if (props.gradient === "green") {
      document.documentElement.style.setProperty("--banner-gs", "#3e9a68");
      document.documentElement.style.setProperty("--banner-ge", "#0b8040");
      document.documentElement.style.setProperty(
        "--banner-text-color",
        "#FFFFFF"
      );
    }
  }, [props.gradient]);

  return (
    <div>
      <Row>
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

      {/* **** Banner Mobile ****
      <Row id="bannerMobile">
        <Col className="g-0">
          <div className="banner-wrapper-mobile">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
          <div className="banner-image-wrapper-mobile">
            <img src={props.image} alt={props.imageAlt} />
          </div>
        </Col>
      </Row> */}
    </div>
  );
}
