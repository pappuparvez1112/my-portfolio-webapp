import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1uwvvva",
      "template_ezqacmr",
      form.current,
      "b10vq3QhGyH1RI_qA"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="article contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>pappuparvezshazz@gmail.com</h5>
            <a href="https://mail.google.com/mail/pappuparvezshazz@gmail.com">
              send me a message
            </a>
          </article>
          <article className="article contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>pappuparvez</h5>
            <a href="https://m.me/pappuparvez2">send me a message</a>
          </article>
          <article className="article contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>

            <a href="https://www.linkedin.com/in/masud-parvez-8518b0260/">
              send me a message
            </a>
          </article>
        </div>

        {/* end of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <textarea
            className="input"
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
