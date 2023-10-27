import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/masud-parvez-8518b0260/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/pappuparvez1112"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/pappuparvez2"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
