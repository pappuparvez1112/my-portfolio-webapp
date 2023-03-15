/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Pappu parvez</a>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Pappu Tutorials.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
