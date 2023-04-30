import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import {servicesData} from '../../data/services.js'
class WhatWeDoPart extends React.Component {

  render() {
    
    return (
      <div className="what-we-do-area gray-bg pt-50 pb-120">
        <Container>
          <Row>
            <div className="col-lg-10 col-md-10">
              <div className="section-title-2 pb-10">
                <h2 className="title">Our Services</h2>
                <p className="pl-2">
                  We guarantee our services will leave you with a smile on your
                  face. Enjoy the experience! Life is too short to settle for
                  mediocre service. Treat yourself and enjoy our exceptional
                  services.
                </p>
              </div>
            </div>
          </Row>
          <Row>
            {(servicesData??[]).map((service, index) => (
              <Col lg="4" md="6" key={index}>
                <div className="what-we-do-item mt-30">
                  <Link to={`services-details?type=${((service??'')?.split(" ")?.join("-")??'')}`}>
                    <h6>{service}</h6>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              </Col>
            ))}

          </Row>
          {/* row */}
        </Container>
        {/* container */}
      </div>
    );
  }
}

export default WhatWeDoPart;
