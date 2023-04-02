// SERVICES IS Experiences

import React from 'react'
import './services.css'
import {TbPointFilled} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='experiences'>
      <h5 className='fuzuli'>What I offer</h5>
      <h2>cat /etc/experiences</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Defender 302 | Defensive Security Operations</h3>
          </div>

          <ul className='service__list'>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Monitored and analyzed live malicious network traffics using SIEM tools (IBM QRadar, Zenoss, Palo Alto Firewall)</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Enhanced defensive security operation skills including incident response frameworks, the cyber kill chain, and SOC operations</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Prepared cyber incident reports covering the impacts, attacker profile, threat hunting, recovery, remediation, prevention</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Analyzed the CIA triad (confidentiality, integrity, and availability) to determine the potential impact of the attack</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Infrastructure & Network Engineer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Contributed to a real-life cyberattack remediation and recovery phase by conducting malware scanning on 200+ infected external drives </p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Kept logs of every step involved in the incident recovery phase and reported the status updates to the head of IT department</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Re-imaged infected computers to desired Operation System, connected them to current Active Directory domain</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Installed, configured, and troubleshooted network equipment such as Cisco Switches, Uninterruptible Power Supplies (UPS), and WAPs</p>
            </li>
            <li>
              <TbPointFilled className='service__list_icon'/>
              <p>Maintained accurate records of the telecommunication infrastructure and maintained proper connectivity throughout Purdue campus</p>
            </li>

            
          </ul>
        </article>

        
      </div>
    </section>
  )
}

export default Services