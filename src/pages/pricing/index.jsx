import React from "react";
import Layout from "../../layouts";
import { Link } from "react-router-dom";
import { Container, Row, Col, Tab } from "react-bootstrap";
import data from "../../data/pricing";

class PricingPage extends React.Component {
  render() {
    const list = [];

    for (const [i, item] of data.entries()) {
      list.push(
        <Col key={i} lg="3" md="6" sm="8" className="mt-30">
          <div
            className="plans-item bg_cover text-center"
            style={{
              backgroundImage: "url(assets/images/plans-thumb.jpg)",
            }}
          >
            <b>{item.name}</b>
            <br />
            <h3 className="title d-flex">
              {item.currency}
              <span>{item.monthly_price}</span>
            </h3>
            <p>onwards*</p>
            <p>{item.description}</p>
          </div>
        </Col>
      );
    }

    return (
      <Layout>
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">Our Plans</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Home </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        pricing
                      </li>
                    </ol>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <div className="services-plans-area">
            <Container>
              <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                <Row className="align-items-center"></Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-center">{list}</Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="justify-content-center">{list}</Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }
}

export default PricingPage;
