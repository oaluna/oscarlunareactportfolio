import React from 'react'
import './Contact.css'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill'
import { contactInfo } from '../../Portfolio'
import { Fade } from 'react-reveal'

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance='20px'>
      <div className='main contact-margin-top' id='contact'>
        <div className='contact-div-main'>
          <div className='contact-header'>
            <h1 className='heading contact-title'>{contactInfo.title}</h1>
            <p className='subTitle contact-subtitle'>{contactInfo.subtitle}</p>
            <div className='contact-text-div'>
            <i className="fas fa-phone-alt fa-1x"></i>
              <a className='contact-detail' href={'tel:' + contactInfo.number}>
                {contactInfo.number}
              </a>{' '}
              {' '}<i className="fas fa-envelope fa-1x"></i>
              <a
                className='contact-detail-email'
                href={'mailto:' + contactInfo.email_address}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
              <br />
              <br />
              <SoftwareSkill />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
