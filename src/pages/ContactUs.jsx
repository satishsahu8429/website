import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/contact.css";
import Slider1 from "../component/Slider1";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    jobTitle: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData(formData); 
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      jobTitle: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact_section">
        <Container>
          <Row className="pt-lg-5 pt-3 pb-3 pb-lg-5">
            <Col lg={7}>
              <h2 className="fw-bold fs-1 pb-3">Get In Touch</h2>
              <p className="fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                ipsum iusto. Eveniet dolore nemo aspernatur impedit hic,
                doloremque ipsa id nam quasi nesciunt tempora enim corporis
                error repellendus asperiores. Fugit.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <div className="form_container">
            <Row>
              <Col lg={7} md={12} className="pe-lg-0">
                <div className="form_box">
                  <h2 className="fs-3 fw-bold mb-4">Send a Message</h2>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <Row className="mb-4">
                        <Col sm={6}>
                          <input
                            required
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </Col>
                        <Col sm={6}>
                          <input
                            required
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col sm={6}>
                          <input
                            required
                            type="number"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </Col>
                        <Col sm={6}>
                          <input
                            required
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <input
                            required
                            type="text"
                            name="jobTitle"
                            className="form-control"
                            placeholder="Job Title"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <textarea
                            required
                            name="message"
                            className="form-control"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div className="submit_btn text-end">
                            <button type="submit" className="border-0">
                              Submit
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={12} className="ps-lg-0">
                <div className="social_media">
                  <h2 className="fs-3 fw-bold mb-4">Contact Info</h2>
                  <ul className="p-0">
                    <li>
                      <a href="tel:918429813814">
                        <i className="fa fa-mobile" aria-hidden="true"></i> 91+
                        8429813814
                      </a>
                    </li>
                    <li>
                      <a href="mailto:satishsahu4499@gmail.com">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                        satishsahu4499@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className="d-flex p-0 social_media_icon pt-3">
                    <li className="me-2">
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="me-2">
                      <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {submittedData && (
        <section className="submitted_data_section">
          <Container>
            <Row>
              <Col>
                <h2 className="fs-3 fw-bold mb-4">Submitted Data</h2>
                <p><b>First Name:</b> {submittedData.firstName}</p>
                <p><b>Last Name:</b> {submittedData.lastName}</p>
                <p><b>Phone:</b> {submittedData.phone}</p>
                <p><b>Email:</b> {submittedData.email}</p>
                <p><b>Job Title:</b> {submittedData.jobTitle}</p>
                <p><b>Message:</b> {submittedData.message}</p>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Slider1 />
    </>
  );
}

export default ContactUs;
