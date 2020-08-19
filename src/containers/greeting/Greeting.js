import React from 'react'
import './Greeting.css'
import { greeting } from '../../Portfolio'
import { Fade } from 'react-reveal'

export default function Greeting() {
  return (
    <Fade duration={1000} distance='40px'>
      <div className='greet-main' id='greeting'>
        <div className='greeting-main'>
          <div className='greeting-text-div'>
            <div>
              <h1 className='greeting-text'> {greeting.title} </h1>
              <p className='subTitle'>{greeting.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
