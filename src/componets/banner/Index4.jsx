import React from "react";

import bannerImg from "../../assets/images/banner-bg-3.jpg";
import { Container, Row, Col } from "react-bootstrap";

class Banner extends React.Component {
  render() {
   
    return (
      <React.Fragment>
        <div
          className="banner-area-3 bg_cover"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}'/'${bannerImg})`,
          }}
        >
          <div className="banner-overlay2">
            <div className="banner-overlay">
              <Container>
                <Row className="align-items-center">
                  <Col lg="12">
                    <div className="banner-content text-center ">
                      <span className="sub-title">Let us be your guide</span>
                      <h1 className="title">
                        Best Business <br /> Group
                      </h1>
                      <span className="sub-title">Enjoy our services!</span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
