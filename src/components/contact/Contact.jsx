import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import emailjs, { send } from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xzf4hju', 'template_j7cjbri', form.current, 'WfhElP77j2Y-AGnr6')

    e.target.reset()
    .then((result) => {
      console.log(result.text);
      alert('Email has been sent successfully!')
  }, (error) => {
      console.log(error.text);
      alert('An error occured, please try again later.')
  });
  };


  return (
    <section id='contact'>
      <h5 className='fuzuli'>Get in Touch</h5>
      <h2>cat /usr/contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>zamir@purdue.edu</h5>
            <a href="mailto:zamir@purdue.edu" target="_blank">Send a message</a>
          </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required />
            <input type="email" name='email' placeholder='Email' required />
            <textarea name="message" rows="7" placeholder='Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

          
        
      </div>
    </section>
  )
}

export default Contact