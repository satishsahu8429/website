import React, { useRef } from "react";
import Slider from "react-slick";
import ".././assets/css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from "react-bootstrap";
import user1 from "../assets/images/slider/user.png";
import { carddata } from "./Data/slider";

function Slider1() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="slider_section mt-5">
      <Container>
        <h1 className="fw-bold pt-5 pb-5 text-capitalize m-0">
        What is the client's <span className="text-danger">feedback?</span>
        </h1>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {carddata.map((item, index) => (
              <div key={index}>
                <Card>
                  <div className="d-flex flex-column justify-content-around">
                    <p>{item.title}</p>
                    <div className="d-flex align-items-center">
                      <div className="user_profile">
                        <img src={user1} alt="" />
                      </div>
                      <div className="username ps-3">
                        <p className="m-0 p-0 fw-bold ">{item.username}</p>
                        <span>{item.postion}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
          <div className="next_prev text-end  mt-3 pt-lg-5">
            <button className="btn " onClick={previous}>
              <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="btn ms-4" onClick={next}>
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Slider1;
