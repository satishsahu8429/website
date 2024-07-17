import React from "react";
import "../assets/css/about.css";
import { Row, Col } from "react-bootstrap";
import { aboutservices } from "../component/Data/about";

function About() {
  return (
    <>
      <section className="card_section">
        <div className="container">
          <Row>
            <Col lg={7} md={12} className="m-auto text-center">
              <div className="title pb-5">
                <h2 className="fs-1 pb-3 fw-bold text-capitalize ">
                  Save time managing you business with our services{" "}
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem nisi suscipit in, nulla voluptas itaque eaque doloremque
                  quae, ullam sapiente?
                </p>
              </div>
            </Col>
          </Row>
          <Row className="row g-4">
            {aboutservices.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div
                  className="card one"
                  style={{ backgroundColor: `${item.color}` }}
                >
                  <div className="card_logo">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <div className="card_txt">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}

export default About;
