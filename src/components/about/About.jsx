import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            {/* <article className="about_card">
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </article> */}
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I have the true desire to build up a challenging career opportunity
            to deliver my capabilities. where I would make a significant
            contribution to achieving organizational objectives using my
            knowledge, creativity, competency, academic degree & skills to
            uphold the high reputation of the organization
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
