import React from 'react'
import './Skills.css'
import { skillsList } from '../../Portfolio'
import { Fade } from 'react-reveal'

export default function SkillsList() {
  return (
    <div className='main' id='skills'>
      <div className='skills-main-div'>
        <Fade right duration={1000}>
          <div className='skills-text-div'>
            <h1 className='skills-heading'>{skillsList.title} </h1>
            <div>
              {skillsList.subTitle.map((skill) => {
                return <p className='subTitle skills-text'>{skill}</p>
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
