import React from 'react'
import './Greeting.css'
import Contact from '../contact/Contact'
import { greeting } from '../../Portfolio'
import { Fade } from 'react-reveal'

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance='40px'>
      <div className='greet-main' id='greeting'>
        <div className='greeting-main'>
          <div className='greeting-image-div'>
            <img
              alt='Oscar With His Cousins'
              src={require('../../assests/images/meeeee.jpg')}></img>
          </div>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text'> {greeting.title} </h1>
              <p className='greeting-text-p subTitle'>{greeting.subTitle}</p>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
