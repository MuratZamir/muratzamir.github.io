import React from 'react'
import './footer.css'
import {RxInstagramLogo} from 'react-icons/rx'
import {TfiTwitter} from 'react-icons/tfi'
import {AiOutlineYoutube} from 'react-icons/ai'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer>
      <a src="#" className='footer__logo'><img src={logo} alt="" /></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/zamir.murat" target="_blank"><RxInstagramLogo/></a>
        <a href="https://twitter.com/printmurat" target="_blank"><TfiTwitter/></a>
        <a href="https://www.youtube.com/channel/UCv-T_GeS9j5dmnR-otETc9w" target="_blank"><AiOutlineYoutube/></a>
      </div>
      

      <div className="footer__copyright">
        <small>&copy; Murat Zamir. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer