import React from 'react'
import './nav.css'
import {BiHome, BiMessageRoundedDots} from 'react-icons/bi'
import {IoPersonOutline} from 'react-icons/io5'
import {MdWorkOutline} from 'react-icons/md'
import {GoFileCode} from 'react-icons/go'
import {FiAward} from 'react-icons/fi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><IoPersonOutline/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FiAward/></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GoFileCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots/></a>

    </nav>
  )
}

export default Nav