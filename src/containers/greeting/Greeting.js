import React from 'react'
import './Greeting.css'
import { greeting } from '../../Portfolio'
import SoftwareSkills from '../../components/softwareSkills/SoftwareSkill'
import { Fade } from 'react-reveal'

export default function Greeting() {
  return (
    <Fade down delay={500} duration={1000} distance='40px'>
      <div className='greet-main' id='greeting'>
        <div className='greeting-main'>
          <div className='greeting-text-div'>
              <h1 className=' greeting-text'> {greeting.title} </h1>
              <p className='subTitle'>{greeting.subTitle}</p><br />
            <div>
              <SoftwareSkills />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
