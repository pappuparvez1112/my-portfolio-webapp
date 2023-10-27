/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Pappu parvez
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/pappuparvez2">
          <FaFacebookF />
        </a>
        <a href="https://github.com/pappuparvez1112">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/masud-parvez-8518b0260/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Pappu Tutorials.All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
