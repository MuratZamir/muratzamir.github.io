import React from 'react'
import './about.css'
import IMG from '../../assets/img.png'
import {IoSchoolSharp} from 'react-icons/io5'
import {GiGreekTemple} from 'react-icons/gi'
import {MdSportsMartialArts} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5 className='fuzuli'>Get to Know</h5>
      <h2>whoami</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={IMG} alt="About"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <IoSchoolSharp className='about__icon'/>
              <h5>Purdue University</h5>
              <small>Cybersecurity Major</small>
            </article>

            <article className='about__card'>
              <GiGreekTemple className='about__icon'/>
              <h5>Pi Kappa Alpha </h5>
              <small>Active Member</small>
            </article>

            <article className='about__card'>
              <MdSportsMartialArts className='about__icon'/>
              <h5>Boxing</h5>
              <small>1 Years of Experience</small>
            </article>
          </div>

          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an individual driven by an unwavering passion for cybersecurity, I am constantly honing my skills 
          to stay ahead of the curve in this ever-evolving field. Alongside this, I indulge in activities that 
          keep me energized and focused, including playing video games, reading books, and maintaining an active 
          lifestyle by going to the gym regularly. <br></br>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My journey into technology began when I was a freshman in high school, where I co-founded a robotics 
          club that ignited my interest in coding with Arduino. This led me to delve deeper into the 
          cybersecurity realm, where I discovered TryHackMe as a valuable resource for mastering security concepts.<br></br>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I pursued a degree in cybersecurity at Purdue University and proactively attended numerous security conferences to expand my 
          knowledge and network. My hunger for knowledge never ceases, and I am always seeking opportunities to develop 
          a hacker mindset through relentless dedication and hard work
          </p>
          
          
          

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        


        </div>
      </div>
    </section>
  )
}

export default About