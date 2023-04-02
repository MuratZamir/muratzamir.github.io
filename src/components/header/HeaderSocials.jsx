import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub, BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/murat-zamir" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/MuratZamir" target="_blank"><BsGithub/></a>
        <a href="https://muratzamir.medium.com/" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials