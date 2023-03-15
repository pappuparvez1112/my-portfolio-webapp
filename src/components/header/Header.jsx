import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/profile.png'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
        <h5>Hello i am </h5>
        <h1>Pappu parvez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>

    </div>
   </header>
  )
}

export default Header
