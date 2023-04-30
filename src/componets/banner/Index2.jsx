import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner-man.png";
import { Row, Col, Container } from "react-bootstrap";

class Banner2 extends React.Component {
  render() {
    return (
      <div className="banner-area">
        <Container className="position-relative">
          <Row className="row">
            <Col lg="6">
              <div className="banner-content pt-80">
                <h1
                  className="title wow fadeInLeft pb-0"
                  data-wow-duration="2s"
                  data-wow-delay=".5s"
                  style={{
                    visibility: "visible",
                    animationDuration: "2s",
                    animationDelay: "0.5s",
                    animationName: "fadeInLeft",
                  }}
                >
                  LET US BE YOUR GUIDE
                </h1>
                <span
                  className="wow fadeInLeft pb-20 pb-20 pt-20 w-100"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1s",
                    animationDelay: "0.1s",
                    animationName: "fadeInLeft",
                  }}
                >
                  to a semless business and family relocate experience
                </span>
                <br />

                <div className="navbar-btn mr-100 btn btn-primary p-0">
                  <Link
                    className="main-btn p-10"
                    to={`services-details?type=Why-choose-us`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="banner-shape d-none d-lg-block">
            <img src={bannerImg} alt="" />
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner2;
