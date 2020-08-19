import React from 'react'
import './Skills.css'
import SkillsList from './SkillsList'
import { Fade } from 'react-reveal'

export default function Skills() {
  return (
    <div className='main' id='skills'>
      <div className='skills-main-div'>
        <Fade right duration={1000}>
          <div className='skills-text-div'>
            <SkillsList />
          </div>
        </Fade>
      </div>
    </div>
  )
}
