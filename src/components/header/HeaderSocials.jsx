import React from 'react'
import {BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div>
      <div className="header_socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer"><BsDribbble/></a>

      </div>
    </div>
  )
}

export default HeaderSocials
