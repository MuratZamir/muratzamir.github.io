// PORTFOLIO IS PROJECTS
import React from 'react'
import './portfolio.css'
import AWS from '../../assets/aws.png'
import AD from '../../assets/activedirectory.png'
import CCNA from '../../assets/ccna.png'
import DEVOPS from '../../assets/devops.png'
import EH from '../../assets/ethicalhacking.png'
import KEY from '../../assets/keylogger.png'
import KILL from '../../assets/killchain.png'
import MAC from '../../assets/macaddress.png'
import NET from '../../assets/network.png'
import PENTEST from '../../assets/pentest.png'


import {TbPointFilled} from 'react-icons/tb'





const Portfolio = () => {
  return (
    <section id='projects'>
      <h5 className='fuzuli'>My Recet Works</h5>
      <h2>cat /dev/projects</h2>
      


      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={DEVOPS} className='images' alt="" />
          </div>
          <h3>DevOps Pipeline</h3>
          <div className="portfolio__item-cta">
            <a href="https://muratzamir.medium.com/devops-pipeline-3a0dfa592848" className='btn' target='_blank'>Medium</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AD} className='images' alt="" />
          </div>
          <h3>Active Directory Home Lab</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MuratZamir" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NET} className='images' alt="" />
          </div>
          <h3>Enterprise Network Administration</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MuratZamir" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AWS} className='images' alt="" />
          </div>
          <h3>AWS Home Lab</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MuratZamir/AWS-home-lab" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={KILL} className='images' alt="" />
          </div>
          <h3>The Cyber Kill Chain</h3>
          <div className="portfolio__item-cta">
            <a href="https://muratzamir.medium.com/the-cyber-kill-chain-20353374d89" className='btn' target='_blank'>Medium</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PENTEST} className='images' alt="" />
          </div>
          <h3>Jr. Penetration Tester</h3>
          <div className="portfolio__item-cta">
            <a href="https://tryhackme.com/path/outline/jrpenetrationtester" className='btn' target='_blank'>TryHackMe</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={EH} className='images' alt="" />
          </div>
          <h3>Practical Ethical Hacking</h3>
          <div className="portfolio__item-cta">
            <a href="https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course" className='btn' target='_blank'>TCM Security</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MAC} className='images' alt="" />
          </div>
          <h3>MAC Adress Changer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MuratZamir/MAC-address-changer" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={KEY} className='images' alt="" />
          </div>
          <h3>Keylogger</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MuratZamir/Keylogger" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CCNA} className='images' alt="" />
          </div>
          <h3>CCNA 200-301</h3>
          <div className="portfolio__item-cta">
            <a href="https://muratzamir.medium.com/ccna-200-301-5bac4a3f4b61" className='btn' target='_blank'>Medium</a>
          </div>
        </article>



        
      
      </div>
    </section>
  )
}

export default Portfolio