import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/blogs.css";
import { blogcards } from "../component/Data/blogs";

function Blogs() {
  return (
    <>
      <section className="blog_section">
        <Container>
          <Row className="pb-5">
            <Col lg={8}>
              <h2 className="fw-bold fs-1 pt-4 pb-3">Recent Blogs</h2>
              <p className="fs-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint a
                tenetur suscipit assumenda alias odit dolore ut iure eius!
                Blanditiis eaque praesentium temporibus architecto vel beatae
                perspiciatis quo iusto exercitationem.
              </p>
            </Col>
          </Row>
          <Row className="g-3 mb-5">
            {blogcards.map((item, index) => (
              <Col lg={4} md={6} sm={12}>
                <Card key={index}>
                  <div className="blog_img">
                    <a href="">
                      <img
                        src={item.imgUrl}
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <a href="">
                        <h5>{item.title}</h5>
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <p className="text_dots m-0 ">{item.dis}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs;
