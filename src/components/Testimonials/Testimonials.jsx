import React from "react";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Sinthiya",
    review: "I am very much pleased with your work",
  },
  {
    avatar: AVATAR2,
    name: "Razon",
    review: " Super job",
  },
  {
    avatar: AVATAR3,
    name: "Plabon",
    review: "Great work",
  },
  {
    avatar: AVATAR4,
    name: "Shimu",
    review: "Nicely handle the project",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
