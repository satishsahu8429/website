import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../assets/css/header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="header_section">
        <Navbar expand="lg" className={isScrolled ? "fixed-top" : ""} p-0>
          <div className="pt-3 pb-3 ps-lg-5 pe-lg-5  container">
            <Navbar.Brand as={Link} to="/">
              Company Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 justify-content-lg-end  custom_link ">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  services
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="contact_btn ms-lg-4 text-center "
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </section>
    </>
  );
}

export default Header;
