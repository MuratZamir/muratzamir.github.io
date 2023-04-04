// EXPERIENCE IS SKILLS

import React from 'react'
import './experience.css'
import {SiWireshark, SiPython, SiGnubash} from 'react-icons/si'
import {VscTerminalLinux, VscTerminalCmd} from 'react-icons/vsc'
import {MdOutlineHdrAuto,MdSecurity} from 'react-icons/md'
import {DiCss3} from 'react-icons/di'
import {FaReact, FaNetworkWired} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {AiFillHtml5} from 'react-icons/ai'
import {HiSearch} from 'react-icons/hi'
import {IoGitNetworkOutline} from 'react-icons/io5'
import {TbHexagonLetterB, TbSquareLetterM, TbTestPipe} from 'react-icons/tb'













const Experience = () => {
  return (
    <section id='skills'>
      <h5 className='fuzuli'>What skills I have</h5>
      <h2>cat /bin/skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Cybersecurity Domain</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <TbTestPipe className='experience__details-icon'/>
              <div>
                <h4>Penetration Testing</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdSecurity className='experience__details-icon'/>
              <div>
                <h4>Web Application Security</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaNetworkWired className='experience__details-icon'/>
              <div>
                <h4>Network Security</h4>
              </div>
            </article>

            <article className='experience__details'>
              <HiSearch className='experience__details-icon'/>
              <div>
                <h4>Digital Forensics</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiWireshark className='experience__details-icon'/>
              <div>
                <h4>Wireshark</h4>
              </div>
            </article>

            <article className='experience__details'>
              <IoGitNetworkOutline className='experience__details-icon'/>
              <div>
                <h4>Nmap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <VscTerminalLinux className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
              </div>
            </article>

            <article className='experience__details'>
              <TbHexagonLetterB className='experience__details-icon'/>
              <div>
                <h4>Burpsuite</h4>
              </div>
            </article>

            <article className='experience__details'>
              <TbSquareLetterM className='experience__details-icon'/>
              <div>
                <h4>Metasploit</h4>
              </div>
            </article>

            <article className='experience__details'>
              <MdOutlineHdrAuto className='experience__details-icon'/>
              <div>
                <h4>Autopsy</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Programming Language </h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className='experience__details'>
              <VscTerminalCmd className='experience__details-icon'/>
              <div>
                <h4>C</h4>
              </div>
            </article>

            <article className='experience__details'>
              <SiGnubash className='experience__details-icon'/>
              <div>
                <h4>Bash</h4>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3  className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>


          
        </div>
        
      </div>  
    </section>
  )
}

export default Experience