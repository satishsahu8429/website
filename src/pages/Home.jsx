import React from "react";
import Banner from "../component/Banner";
import Slider from "../component/Slider1";
import ButtonTab from "../component/ButtonTab";
import "../assets/css/home.css";
import { Col, Container, Row } from "react-bootstrap";
import Styled from "styled-components";
const Home = () => {
  const StyleButton = Styled.button`
    
  color: #fff;
  background-color: #f44a44;
  font-size:16px;
  padding:10px 35px;
  border:none;
  font-weight: 500;
  border-radius:22px;
  margin-bottom:15px;
  &:hover {
  color: #000; 
  transition: 0.3s ease all;
}

`;
  return (
    <>
      <Banner />
      <Slider />
      <ButtonTab />
      <section className="marketing_section mt-lg-5">
        <Container>
          <Row>
            <Col lg={7} md={12} className="pe-lg-5">
              <div className="inner_left">
                <span>Who we are</span>
                <h2>
                  our infulence <b>marketing </b>services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  modi voluptas, minima consectetur voluptatibus eaque
                  aspernatur officia quis reprehenderit quos, esse mollitia
                  incidunt vel!
                </p>
                <StyleButton>View more</StyleButton>
              </div>
            </Col>
            <Col lg={5} md={12}>
              <Row className="g-3">
                <Col md={6} sm={12}>
                  <div className="card">
                    <div className="card_logo">
                      <span>
                        <i className="fa fa-wrench" aria-hidden="true"></i>
                      </span>
                    </div>
                    <h2>Settings</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellendus eos aliquid voluptate odit
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="card">
                    <div className="card_logo">
                      <span>
                        <i className="fa fa-soundcloud" aria-hidden="true"></i>
                      </span>
                    </div>
                    <h2>Cloud settings</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellendus eos aliquid voluptate odit
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="card">
                    <div className="card_logo">
                      <span>
                        {" "}
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                      </span>
                    </div>
                    <h2>data analytics</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellendus eos aliquid voluptate odit
                    </p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="card">
                    <div className="card_logo">
                      <span>
                        {" "}
                        <i
                          className="fa fa-product-hunt"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <h2>Product review</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellendus eos aliquid voluptate odit
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
