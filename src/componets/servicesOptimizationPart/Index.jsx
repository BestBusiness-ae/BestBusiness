import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ServicesOptimizationPart({data}) {

  return (

    <div className="services-optimization-area pt-30 pb-120 ">
      <Container>
        <Row className="align-items-center">
          <Col lg="4" md="6">
            <div className="services-optimization-thumb mt-40">
              <img src="assets/images/services-op-1.jpg" alt="" />
            </div>
            <div className="services-optimization-thumb-2">
              <img src="assets/images/services-op-2.jpg" alt="" />
            </div>
          </Col>
          <Col lg="8" className="order-lg-2 order-1">
            <div className="services-optimization-content mt-0">
              {/* <span>Search Enging Optimization</span> */}
              {/* <h3 className="title">Nothing to do anything.</h3> */}
              {data?.map((service)=><p>{service}<br/><br/></p>)}
              
              <div className="action-support-item">
                <p>Make A Call</p>
                <span>+971 50 823 6155</span>
                <i className="fal fa-phone" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicesOptimizationPart;
