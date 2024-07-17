import React from "react";
import services_img from "../assets/images/services/servi1.jpg";
import "../assets/css/services.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider1 from "../component/Slider1";
function Services() {
  return (
    <>

      {/* ========== banner ====== */}
      <section className=" position-relative banner ">
        <div className="overly"></div>
        <div className="server_banner">
          <img src={services_img} alt="" />
        </div>
      </section>

      {/* ===== our_service_section ===== */}
      <section className="our_service_section">
        <Container>
          <Row>
            <Col lg={7} className="text-center m-auto">
              <div className="inner_content">
                <span className="our">Our Services</span>
                <h2 className="pt-5 pb-4">
                  <span className="process">Process</span> we Follow
                </h2>
                <p className="fs-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro hic alias exercitationem dolore voluptatum! Beatae
                  similique quibusdam impedit ut magnam nisi cupiditate deserunt
                  ratione. Tenetur, hic! Laboriosam dolorem modi minus.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-3 services_cards pt-5 justify-content-center">
            <Col lg={4} md={6} className=" position-relative ">
              <div className="numbers">
                <span>01</span>
              </div>
              <div className="inner">
                <h3>Reserch project</h3>
                <p className="pt-lg-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  iure tempora a doloribus itaque provident ad facere aliquam
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className=" position-relative ">
              <div className="numbers">
                <span>02</span>
              </div>
              <div className="inner">
                <h3>Evaluate plans</h3>
                <p className="pt-lg-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  iure tempora a doloribus itaque provident ad facere aliquam
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className=" position-relative ">
              <div className="numbers">
                <span>03</span>
              </div>
              <div className="inner">
                <h3>Best plan</h3>
                <p className="pt-lg-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  iure tempora a doloribus itaque provident ad facere aliquam
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Slider1/>
    </>
  );
}

export default Services;
