import React from 'react'
import CV from '../../assets/website-cv.pdf'


export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA