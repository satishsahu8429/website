import React from "react";
import { Row, Col } from "react-bootstrap";
import banner_img from "../assets/images/home/home-banner.jpg";
import Styled from "styled-components";

const StyleButton = Styled.button`
  color: #fff;
  background-color: #f44a44;
  font-size: 16px;
  padding: 10px 25px;
  border: none;
  font-weight: 500;
  border-radius: 22px;
  &:hover {
    color: #000; 
    transition: 0.3s ease all;
  }
`;

const Banner = () => {
  return (
    <>
      <section className="banner_section text-white">
        <div className="container-xl">
          <Row>
            <Col lg={6} className="col-12 py-5">
              <h1 className="col-lg-8 text-capitalize py-4">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p className="col-lg-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quae, dignissimos dolore eum incidunt hic. Impedit,
                laborum iure. Nulla eligendi provident aperiam dolorum voluptate
                debitis quos ipsam? Incidunt, dolorum pariatur!
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center pt-3 pt-lg-5">
                <StyleButton className="me-lg-4 me-md-4 mb-lg-0 mb-3 mb-md-0">
                  Custom Button
                </StyleButton>
               
              </div>
            </Col>
            <Col lg={5} className="mx-auto px-0 col-12">
              <div className="header_img mt-lg-0 mt-5">
                <img className="w-100" src={banner_img} alt="Banner" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Banner;
