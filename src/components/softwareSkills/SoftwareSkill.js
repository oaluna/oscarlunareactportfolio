import React from 'react'
import './SoftwareSkill.css'
import { Fade } from 'react-reveal'
import { softwareSkillsLeft, softwareSkillsRight } from '../../Portfolio'

export default function SoftwareSkills() {
  return (
  <>
    
    <div>
      <div className='software-skills-main-div'>
        <ul className='skills-list'>
          {softwareSkillsLeft.technologies.map((tech) => {
            return (
              <Fade left delay={2500} duration={1500}>
              <li className='software-skill-inline' name={tech.skillName}>
                <i className={tech.fontAwesomeClassname}></i>
                <label
                  htmlFor='software-skill-inline'
                  className={tech.skillName}>
                </label>
              </li>
              </Fade>
            )
          })}
          {softwareSkillsRight.technologies.map((tech) => {
            return (
              <Fade right delay={2500} duration={1500}>
              <li className='software-skill-inline' name={tech.skillName}>
                <i className={tech.fontAwesomeClassname}></i>
                <label
                  htmlFor='software-skill-inline'
                  className={tech.skillName}>
                </label>
              </li>
              </Fade>
            )
          })}
        </ul>
      </div>
      </div>
  </>
  )
}
