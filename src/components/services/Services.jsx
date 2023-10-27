import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" title=" " />
              <p>
                <h3>User-Centric Design :</h3>I focus on creating user-friendly
                and visually appealing interfaces that provide an excellent user
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>Responsive Web Design: </h3>
                Your website will look and function flawlessly on various
                devices, including desktops, tablets, and smartphones.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>Interactive Features: </h3>I implement dynamic features and
                interactivity using modern frameworks and libraries like
                React.js and Next.js.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>UI Frameworks : </h3>
                I'm proficient in using popular front-end frameworks like Ant
                Design, Tailwind CSS, Bootstrap, and pure HTML, CSS, and
                JavaScript to tailor the user interface to your brand.
              </p>
            </li>
          </ul>
        </article>

        {/* devider */}

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>Data Management :</h3>I handle data storage and retrieval
                efficiently using databases such as MySQL, PostgreSQL, MongoDB,
                and manage data models with Prisma ORM and Mongoose.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>Server-Side Logic: </h3>I build server-side applications
                using Node.js and Express.js, ensuring a robust and secure
                server infrastructure.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>API Development:</h3>I create RESTful and GraphQL APIs for
                seamless communication between the front-end and back-end.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <h3>Authentication and Authorization: </h3> Implement secure
                authentication and authorization mechanisms to protect your data
                and users.
              </p>
            </li>
          </ul>
        </article>

        {/* second devider */}

        {/* <article className="service">
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Bui</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
