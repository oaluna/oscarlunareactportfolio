import React from 'react'
import './Skills.css'
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill'
import { skillsSection } from '../../Portfolio'
import { Fade } from 'react-reveal'

export default function Skills() {
  return (
    <div className='main' id='skills'>
      <div className='skills-main-div'>
        <Fade right duration={1000}>
          <div className='skills-text-div'>
            <h1 className='skills-heading'>{skillsSection.title} </h1>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map(skills => {
                return <p className='subTitle skills-text'>{skills}</p>
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
