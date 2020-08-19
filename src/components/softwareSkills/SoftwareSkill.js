import React from 'react'
import './SoftwareSkill.css'
import { softwareSkills } from '../../Portfolio'

export default function SoftwareSkills() {
  return (
    <div>
      <div className='software-skills-main-div'>
        <ul className='skills-list'>
          {softwareSkills.technologies.map((tech) => {
            return (
              <li className='software-skill-inline' name={tech.skillName}>
                <i className={tech.fontAwesomeClassname}></i>
                <label
                  htmlFor='software-skill-inline'
                  className={tech.skillName}>
                  {tech.skillName}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
