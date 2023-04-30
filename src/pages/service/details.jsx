import React from "react";

import ServicesOptimizationPart from "../../componets/servicesOptimizationPart/Index";

import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { Container, Row, Col } from "react-bootstrap";
import { ServiceDetails } from "../../data/servises-details.js";

function ServicesDetails() {
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type").split("-").join("");
  console.log(type);
  return (
    <Layout>
      <div className="page-title-area">
        <Container>
          <Row>
            <Col lg="12">
              <div className="page-title-item text-center">
                <h2 className="title">{ServiceDetails[type]?.title ?? ""}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/"}>Home </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {ServiceDetails[type]?.title ?? ""}
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ServicesOptimizationPart data={ServiceDetails[type]?.content || []} />
    </Layout>
  );
}

export default ServicesDetails;
