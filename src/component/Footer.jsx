import React from "react";
import "../assets/css/footer.css";
import "../assets/css/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <section className="news_letter_section mt-5">
        <Container className="d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap">
          <div className="email_newsletter d-flex align-items-center">
            <p className="pe-4 mb-lg-0">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </p>
            <p className="m-0 text-light fs-5">Subscribe Newsletter</p>
          </div>
          <div className="d-flex">
            <input type="text" name="" id="" placeholder="enter your email" />
            <Button className="rounded-0">Subscribe</Button>
          </div>
        </Container>
      </section>
      <section className="footer_section">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="foot-items">
                <h3 className="text-light pt-3">Logo</h3>
                <p className="text-light pt-3 pe-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, accusantium !
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="foot-items">
                <h2>Quick Link</h2>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="foot-items">
                <h2>Quick Link</h2>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Home</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="foot-items">
                <h2>Contact us </h2>
                <ul>
                  <li>
                    <a href="">
                      <i
                        className="fa fa-facebook-official pe-2"
                        aria-hidden="true"
                      ></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        className="fa fa-instagram pe-2"
                        aria-hidden="true"
                      ></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        className="fa fa-linkedin-square pe-2"
                        aria-hidden="true"
                      ></i>
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        className="fa fa-map-marker pe-2"
                        aria-hidden="true"
                      ></i>
                      Google Map
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="copy_right text-center">
        <p className="mb-0 pt-2 text-white text-capitalize">© Copyright Finance All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
