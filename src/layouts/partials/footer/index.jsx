import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="footer-area footer-area-2 footer-area-1 bg_cover"
          style={{ backgroundImage: "url(assets/images/footer-bg.jpg)" }}
        >
          <div className="footer-overlay">
            <Container className="position-relative">
              <Row>
                <Col lg="4" md="7">
                  <div className="widget-item-1 mt-30">
                    <img src="/assets/images/logo-1.1.png" alt="" />
                    <p>
                      The web has changed a lot since Vitaly posted his first
                      article back in 2006. The team at Smashing has changed
                      too, as have the things that we bring to our community
                      onferences, books, and our membership added to the online
                      magazine.
                    </p>
                    <p>
                      One thing that hasn’t changed is that we’re a small team —
                      with most of us not working
                    </p>
                  </div>{" "}
                  {/* widget item 1 */}
                </Col>
                <Col lg="3" md="5" className="offset-lg-1">
                  <div className="widget-item-2 mt-30">
                    <h4 className="title">Pages</h4>
                    <div className="footer-list">
                      <ul>
                        <li>
                          <Link to={`/services-details?type=Why-choose-us`}>
                            <i className="fal fa-angle-right" />
                            Why Choose Us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/about-detail-page"}>
                            <i className="fal fa-angle-right" />
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/contact"}>
                            <i className="fal fa-angle-right" />
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="6">
                  <div className="widget-item-2 widget-item-3 mt-30">
                    <h4 className="title">Working Hours</h4>
                    <ul>
                      <li>Monday - Friday: 7:00 - 17:00</li>
                      <li>Saturday: 7:00 - 12:00</li>
                      <li>Sunday and holidays: 8:00 - 10:00</li>
                    </ul>
                    <p>
                      <span>For more then 30 years,</span> IT Service has been a
                      reliable partner in the field of logistics and cargo
                      forwarding.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
            </Container>
          </div>
        </footer>

        <div className="back-to-top back-to-top-2">
          <a href="#backTotop">
            <i className="fas fa-arrow-up" />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
