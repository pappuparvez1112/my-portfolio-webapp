import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>                    
          </ul>
        </article>

        {/* devider */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>                    
          </ul>
        </article>

        {/* second devider */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>                    
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
