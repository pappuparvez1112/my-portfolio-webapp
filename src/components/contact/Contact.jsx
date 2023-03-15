import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmgw3hf', 'template_nmdqgjm', form.current, 'b10vq3QhGyH1RI_qA')
    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="article contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pappuparvezshazz@gmail.com</h5>
            <a href="mailto:pappuparvezshazz@gmail.com">send me a message</a>
          </article>
          <article className="article contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>pappuparvez</h5>
            <a href="https://m.me/pappuparvez2">send me a message</a>
          </article>
          <article className="article contact_option">
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801871280450</h5>
            <a href="https://api.whatsapp.com/send?phone+8801871280450<">send me a message</a>
          </article>
        </div>

        {/* end of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input className='input' type="text" name="name" placeholder='Your full name' required/>
          <input className='input' type="email" name="email" placeholder='Your email' required/>
          <textarea className='input' name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
