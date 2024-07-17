import React, { useState } from "react";
import "../assets/css/buttontab.css";
import { Container, Row, Col } from "react-bootstrap";

function ButtonTab() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className="about_role_wrapper">
        <section className="tab_section about_the_role">
          <div className="sidebar">
            {/* <!-- tabs buttons  --> */}
            <button
              className={`tab-btn ${activeTab === 1 ? "tab-btn-active" : ""}`}
              data-for-tab="1"
              onClick={() => handleTabClick(1)}
            >
              Join for free
            </button>
            <button
              className={`tab-btn ${activeTab === 2 ? "tab-btn-active" : ""}`}
              data-for-tab="2"
              onClick={() => handleTabClick(2)}
            >
              premium
            </button>
            {/* <!-- tabs buttons  --> */}
          </div>
          <div className="tabs">
            {/* <!-- tabs content  --> */}
            <div className="content">
              <div
                className={`tab-content ${
                  activeTab === 1 ? "tab-content-active" : ""
                }`}
                data-tab="1"
              >
                <div className="tab_container active">
                  <Container className="content_wrapper">
                    <Row>
                      <Col
                        className={`${activeTab === 1 ? "active-col" : ""}`}
                        lg={6}
                      >
                        <h2>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                        </h2>
                        <div className="listing">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col lg={6} className="ps-3 ps-lg-5">
                        <h2 className="pt-3 pt-lg-5 ">Lorem ipsum dolor sit amet</h2>
                        <div className="listing unsetlist">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. 
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias, 
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. 
                            </li>
                           
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div
                className={`tab-content ${
                  activeTab === 2 ? "tab-content-active" : ""
                }`}
                data-tab="2"
              >
                <div className="tab_container">
                  <Container className="content_wrapper">
                    <Row>
                      <Col lg={6}>
                        <h2 className="pt-3">
                          Lorem ipsum dolor sit amet consectetur
                        </h2>
                        <div className="listing unsetlist">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col
                        className={`${activeTab === 2 ? "active-col" : ""}`}
                        lg={6}
                      >
                        <h2>lorem ipsum dolor sit amet adipisicing</h2>
                        <div className="listing">
                          <ul>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias,
                            </li>
                            <li>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Molestias
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ButtonTab;
